import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { updateInfoClinic, updateSettingsClinic } from "../redux/actions";
import NavTabDay from "../components/nav-tab-days";
import ContentTabDay from "../components/content-tab-days";

const SettingsForm = () => {
  const infoClinic = useSelector((state) => state.infoClinic);
  const setting = useSelector((state) => state.setting);
  const isUpdating = useSelector((state) => state.isUpdating);
  const dispatch = useDispatch();
  const listDays = setting.days;
  const { register, errors, handleSubmit } = useForm();

  const handleRenderNavTabs = () => {
    if (!listDays) return;

    const navTabs = listDays.map((item, index) => (
      <NavTabDay key={index} id={index} day={item.day}></NavTabDay>
    ));

    return navTabs;
  };

  const handleRenderTabContent = () => {
    if (!listDays) return;

    const tabsContent = listDays.map((item, index) => (
      <ContentTabDay
        key={index}
        id={index}
        day={item.day}
        interval={item.interval}
        opening_hours={item.opening_hours}
        active={item.active}
      ></ContentTabDay>
    ));

    return tabsContent;
  };

  const sendDataInfoClinic = (data) => {
    const dataForm = {
      name: data.clinic_name,
      phone: data.clinic_phone,
      address: data.clinic_address,
      email: data.clinic_email,
    };

    dispatch(updateInfoClinic(dataForm));
  };

  const sendDataSettingsClinic = (event) => {
    event.preventDefault();

    const dataForm = {
      number_procedures_patients_list:
        event.target.number_procedures_patients_list.value,
      period_duration: event.target.period_duration.value,
      days: [
        {
          day: "lunes",
          active: event.target.dayCheck0.checked,
          opening_hours: [
            event.target.opening_hours_from0.value,
            event.target.opening_hours_to0.value,
          ],
          interval: [
            event.target.interval_from0.value,
            event.target.interval_to0.value,
          ],
        },
        {
          day: "martes",
          active: event.target.dayCheck1.checked,
          opening_hours: [
            event.target.opening_hours_from1.value,
            event.target.opening_hours_to1.value,
          ],
          interval: [
            event.target.interval_from1.value,
            event.target.interval_to1.value,
          ],
        },
        {
          day: "miércoles",
          active: event.target.dayCheck2.checked,
          opening_hours: [
            event.target.opening_hours_from2.value,
            event.target.opening_hours_to2.value,
          ],
          interval: [
            event.target.interval_from2.value,
            event.target.interval_to2.value,
          ],
        },
        {
          day: "jueves",
          active: event.target.dayCheck3.checked,
          opening_hours: [
            event.target.opening_hours_from3.value,
            event.target.opening_hours_to3.value,
          ],
          interval: [
            event.target.interval_from3.value,
            event.target.interval_to3.value,
          ],
        },
        {
          day: "viernes",
          active: event.target.dayCheck4.checked,
          opening_hours: [
            event.target.opening_hours_from4.value,
            event.target.opening_hours_to4.value,
          ],
          interval: [
            event.target.interval_from4.value,
            event.target.interval_to4.value,
          ],
        },
        {
          day: "sábado",
          active: event.target.dayCheck5.checked,
          opening_hours: [
            event.target.opening_hours_from5.value,
            event.target.opening_hours_to5.value,
          ],
          interval: [
            event.target.interval_from5.value,
            event.target.interval_to5.value,
          ],
        },
        {
          day: "domingo",
          active: event.target.dayCheck6.checked,
          opening_hours: [
            event.target.opening_hours_from6.value,
            event.target.opening_hours_to6.value,
          ],
          interval: [
            event.target.interval_from6.value,
            event.target.interval_to6.value,
          ],
        },
      ],
    };

    dispatch(updateSettingsClinic(dataForm));
  };

  return (
    <div className="col-7 container-forms">
      <div className="row">
        <div className="col">
          <h3>Configuración</h3>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h5>Ajustes</h5>
          <hr />
          <div className="settings-clinic">
            <form onSubmit={sendDataSettingsClinic}>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="period_duration">Duración de la cita:</label>
                  <select
                    name="period_duration"
                    id="period_duration"
                    className="form-control"
                    defaultValue={setting.period_duration}
                  >
                    <option value="10">10 minutos</option>
                    <option value="15">15 minutos</option>
                    <option value="20">20 minutos</option>
                    <option value="30">30 minutos</option>
                    <option value="60">60 minutos</option>
                  </select>
                </div>
                <div className="form-group col">
                  <label htmlFor="number_procedures_patients_list">
                    Cantidad últimos procedimientos en inicio:
                  </label>
                  <select
                    name="number_procedures_patients_list"
                    id="number_procedures_patients_list"
                    className="form-control"
                    defaultValue={setting.number_procedures_patients_list}
                  >
                    <option value="1">1 procedimiento</option>
                    <option value="2">2 procedimientos</option>
                    <option value="3">3 procedimientos</option>
                    <option value="4">4 procedimientos</option>
                    <option value="5">5 procedimientos</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="">Semana</label>
                  <ul className="nav nav-tabs" id="weekTabs" role="tablist">
                    {handleRenderNavTabs()}
                  </ul>
                  <div className="tab-content pt-4 p-3" id="weekTabsContent">
                    {handleRenderTabContent()}
                  </div>
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col d-flex justify-content-end align-items-center">
                  <a href="#" className="link-primary mr-3">
                    Cancelar
                  </a>
                  <button
                    type="submit"
                    className={`btn-primary locked ${
                      isUpdating === true && "d-none"
                    }`}
                  >
                    Actualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h5>Información de la clínica</h5>
          <hr />
          <div className="info-general">
            <form onSubmit={handleSubmit(sendDataInfoClinic)}>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="clinic_name">Nombre Clínica*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="clinic_name"
                    name="clinic_name"
                    placeholder="Nombre clínica*"
                    defaultValue={infoClinic.name}
                    ref={register({
                      required: {
                        value: true,
                        message: "Nombre es requerido",
                      },
                    })}
                  />
                  <span className="d-block mb-2">
                    <small className="text-danger">
                      {errors?.clinic_name?.message}
                    </small>
                  </span>
                </div>
                <div className="form-group col">
                  <label htmlFor="clinic_address">Dirección*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="clinic_address"
                    name="clinic_address"
                    placeholder="Dirección*"
                    defaultValue={infoClinic.address}
                    ref={register({
                      required: {
                        value: true,
                        message: "Dirección es requerida",
                      },
                    })}
                  />
                  <span className="d-block mb-2">
                    <small className="text-danger">
                      {errors?.clinic_address?.message}
                    </small>
                  </span>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="clinic_phone">Teléfono*</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="clinic_phone"
                    name="clinic_phone"
                    placeholder="Teléfono*"
                    defaultValue={infoClinic.phone}
                    ref={register({
                      required: {
                        value: true,
                        message: "Teléfono es requerido",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Ingrese solo números",
                      },
                    })}
                  />
                  <span className="d-block mb-2">
                    <small className="text-danger">
                      {errors?.clinic_phone?.message}
                    </small>
                  </span>
                </div>
                <div className="form-group col">
                  <label htmlFor="clinic_email">E-mail*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="clinic_email"
                    name="clinic_email"
                    placeholder="E-mail*"
                    defaultValue={infoClinic.email}
                    ref={register({
                      required: {
                        value: true,
                        message: "E-mail es requerido",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i,
                        message: "Ingrese un E-mail válido",
                      },
                    })}
                  />
                  <span className="d-block mb-2">
                    <small className="text-danger">
                      {errors?.clinic_email?.message}
                    </small>
                  </span>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-6">
                  <label htmlFor="clinic_logo">Logo</label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="form-control"
                      id="clinic_logo"
                      name="clinic_logo"
                      ref={register}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col d-flex justify-content-end align-items-center">
                  <a href="#" className="link-primary mr-3">
                    Cancelar
                  </a>
                  <button
                    type="submit"
                    className={`btn-primary locked ${
                      isUpdating === true && "d-none"
                    }`}
                  >
                    Actualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
