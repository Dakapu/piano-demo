import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import "../scss/navbar.scss";

const NavBar = () => {
  return (
    <ul className="nav justify-content-center p-3">
      <span className="text-white text-uppercase fs-4 me-5" href="#">
        <FontAwesomeIcon icon={solid("music")} className="pe-3" />
        Music <span className="ps-5">|</span>
      </span>
      <li className="nav-item">
        <a className="text-white text-uppercase nav-link" href="#">
          Piano
        </a>
      </li>
      <li className="nav-item">
        <a className="text-white text-uppercase nav-link" href="#">
          Drums
        </a>
      </li>
      <li className="nav-item">
        <a className="text-white text-uppercase nav-link">Flute</a>
      </li>
    </ul>
  );
};

export default NavBar;
