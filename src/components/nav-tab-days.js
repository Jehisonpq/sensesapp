import React from "react";

const NavTabDay = (props) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${props.day === "lunes" && "active"}`}
        data-tab={`tab-day-${props.id}`}
      >
        {props.day.slice(0, 3)}
      </a>
    </li>
  );
};

export default NavTabDay;
