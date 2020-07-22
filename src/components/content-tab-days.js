import React, { useEffect } from "react";

const ContentTabDay = (props) => {
  useEffect(() => {
    changeInputTimeAttDisabled(props.active);
  });

  const handleChangeChk = (event) => {
    changeInputTimeAttDisabled(event.target.checked);
  };

  const changeInputTimeAttDisabled = (value) => {
    const inputsTime = document
      .getElementById("tab-day-" + props.id)
      .querySelectorAll("input[type='time']");

    if (value) {
      inputsTime.forEach((input) => {
        input.removeAttribute("disabled");
      });
    } else {
      inputsTime.forEach((input) => {
        input.setAttribute("disabled", "disabled");
      });
    }
  };

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
              defaultChecked={props.active}
              id={"dayCheck" + props.id}
              name={"dayCheck" + props.id}
              onChange={handleChangeChk}
            />
            <label
              className="custom-control-label"
              htmlFor={"dayCheck" + props.id}
            >
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
              defaultValue={props.opening_hours[0]}
              id={"opening_hours_from" + props.id}
              name={"opening_hours_from" + props.id}
            />
            <span className="m-1">hasta</span>
            <input
              type="time"
              className="form-control"
              defaultValue={props.opening_hours[1]}
              id={"opening_hours_to" + props.id}
              name={"opening_hours_to" + props.id}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>Intervalo</span>
          <div className="form-group form-inline">
            <input
              type="time"
              className="form-control"
              defaultValue={props.interval[0]}
              id={"interval_from" + props.id}
              name={"interval_from" + props.id}
            />
            <span className="m-1">hasta</span>
            <input
              type="time"
              className="form-control"
              defaultValue={props.interval[1]}
              id={"interval_to" + props.id}
              name={"interval_to" + props.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTabDay;
