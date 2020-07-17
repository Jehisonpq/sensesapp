import React from "react";
import { Link } from "react-router-dom";

import LastProcedimientos from "../components/last-procedimientos";

import iconEditar from "../images/icon-editar.png";
import iconBorrar from "../images/icon-delete.png";
import logoWhatsApp from "../images/WA-Logo.png";

const linkWhatsApp = "https://api.whatsapp.com/send?phone=";

const RowPaciente = (props) => {
  const name = `${props.nombre} ${props.apellido}`;
  const initials = props.nombre.charAt(0) + props.apellido.charAt(0);

  return (
    <li className="item" key={props.id}>
      <div className="row">
        <div className="col-xl-4 name">
          <Link to="/">
            <span>{initials}</span>
            {name}
          </Link>
        </div>
        <div className="col-xl-2 phone">
          <a
            href={linkWhatsApp + props.telefono}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="" src={logoWhatsApp} />
          </a>
          {props.telefono}
        </div>
        <div className="col-xl-5 last-procedures">
          <LastProcedimientos id={props.id} />
        </div>
        <div className="col-xl-1">
          <ul className="menu-actions">
            <li>
              <Link to="/">
                <img alt="" src={iconEditar} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img alt="" src={iconBorrar} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default RowPaciente;
