import React from "react";
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
      <ContentTabDay key={index} id={index} day={item.day}></ContentTabDay>
    ));

    return tabsContent;
  };

  const sendDataInfoClinic = (event) => {
    event.preventDefault();

    const dataForm = {
      name: event.target.clinic_name.value,
      phone: event.target.clinic_phone.value,
      address: event.target.clinic_address.value,
      email: event.target.clinic_email.value,
    };

    dispatch(updateInfoClinic(dataForm));
  };

  const sendDataSettingsClinic = (event) => {
    event.preventDefault();

    const dataForm = {
      number_procedures_patients_list:
        event.target.number_procedures_patients_list.value,
      period_duration: event.target.period_duration.value,
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
            <form onSubmit={sendDataInfoClinic}>
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
                    required
                  />
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
                    required
                  />
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
                    required
                  />
                </div>
                <div className="form-group col">
                  <label htmlFor="clinic_email">E-mail*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="clinic_email"
                    name="clinic_email"
                    placeholder="E-mail*"
                    defaultValue={infoClinic.email}
                    required
                  />
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
