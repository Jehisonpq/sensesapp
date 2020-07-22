import React from "react";

const NavTabDay = (props) => {
  const enableTab = (event) => {
    const navTabs = document.querySelectorAll("#weekTabs .nav-item a");
    const contentTabs = document.querySelectorAll("#weekTabsContent .tab-pane");
    const idContent = event.target.getAttribute("data-tab");

    navTabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    contentTabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    event.target.classList.add("active");
    document.getElementById(idContent).classList.add("active");
  };

  return (
    <li className="nav-item">
      <a
        className={`nav-link ${props.day === "lunes" && "active"}`}
        data-tab={`tab-day-${props.id}`}
        onClick={enableTab}
      >
        {props.day.slice(0, 3)}
      </a>
    </li>
  );
};

export default NavTabDay;
