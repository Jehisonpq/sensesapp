import React from "react";

const ContentTabDay = (props) => {
  return (
    <div
      className={`tab-pane ${props.day === "lunes" && "active"}`}
      id={`tab-day-${props.id}`}
    >
      <div className="row mb-2">
        <div className="col">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="dayCheck0"
            />
            <label className="custom-control-label" htmlFor="dayCheck0">
              {props.day}
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>Horarios de apertura</span>
          <div className="form-group form-inline">
            <input
              type="time"
              className="form-control"
              id="opening-hours-from0"
            />
            <span className="m-1">hasta</span>
            <input
              type="time"
              className="form-control"
              id="opening-hours-to0"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>Intervalo</span>
          <div className="form-group form-inline">
            <input type="time" className="form-control" id="interval-from0" />
            <span className="m-1">hasta</span>
            <input type="time" className="form-control" id="interval-to0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTabDay;
