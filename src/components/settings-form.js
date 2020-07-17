import React from "react";

const SettingsForm = () => {
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
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="period-duration">Duración de la cita:</label>
                <select
                  name="period-duration"
                  id="period-duration"
                  className="form-control"
                >
                  <option value="10">10 minutos</option>
                  <option value="15">15 minutos</option>
                  <option value="20">20 minutos</option>
                  <option value="30">30 minutos</option>
                  <option value="35">60 minutos</option>
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
                <ul className="nav nav-tabs" id="weekTabs" role="tablist"></ul>
                <div
                  className="tab-content pt-4 p-3"
                  id="weekTabsContent"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h5>Información de la clínica</h5>
          <hr />
          <div className="info-general">
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="clinic-name">Nombre Clínica*</label>
                <input
                  type="text"
                  className="form-control"
                  id="clinic-name"
                  name="clinic-name"
                  placeholder="Nombre clínica*"
                  required
                />
              </div>
              <div className="form-group col">
                <label htmlFor="clinic-address">Dirección*</label>
                <input
                  type="text"
                  className="form-control"
                  id="clinic-address"
                  name="clinic-address"
                  placeholder="Dirección*"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="clinic-phone">Teléfono*</label>
                <input
                  type="tel"
                  className="form-control"
                  id="clinic-phone"
                  name="clinic-phone"
                  placeholder="Teléfono*"
                  required
                />
              </div>
              <div className="form-group col">
                <label htmlFor="clinic-email">E-mail*</label>
                <input
                  type="text"
                  className="form-control"
                  id="clinic-email"
                  name="clinic-email"
                  placeholder="E-mail*"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-6">
                <label htmlFor="clinic-phone">Logo</label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="form-control"
                    id="clinic- logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
