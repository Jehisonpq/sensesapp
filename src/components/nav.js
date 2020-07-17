import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="nav nav-primary">
      <nav id="nav">
        <ul>
          <li className="item-nav section-agenda">
            <Link className="item-nav" to="/agenda">
              Agenda
            </Link>
          </li>
          <li className="item-nav section-pacientes">
            <Link className="item-nav" to="/pacientes">
              Pacientes
            </Link>
          </li>
          <li className="item-nav section-ventas">
            <Link className="item-nav" to="/ventas">
              Ventas
            </Link>
          </li>
          <li className="item-nav section-reportes">
            <Link className="item-nav" to="/reportes">
              Reportes
            </Link>
          </li>
          <li className="item-nav section-configuracion">
            <Link className="item-nav" to="/configuracion">
              Configuración
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
