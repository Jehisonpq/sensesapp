import React from "react";
import { useSelector } from "react-redux";

import logo from "../images/logo_senses_clinica.png";
import profilePicture from "../images/profile-picture.png";
import logOut from "../images/cerrar_sesion.png";

const Header = () => {
  const infoClinic = useSelector((state) => state.infoClinic);

  return (
    <header className="header">
      <img id="logo" src={logo} alt={infoClinic.name} title={infoClinic.name} />
      <div className="nav-user">
        <ul>
          <li>
            <button className="notifications">
              <span>2</span>
            </button>
          </li>
          <li className="user-info">
            <div className="img-profile">
              <img id="img-profile" alt="" src={profilePicture} />
            </div>
            <span id="user-name">David Ruvalcaba</span>
          </li>
          <li title="Cerrar sesión">
            <img src={logOut} alt="Cerrar sesión" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
