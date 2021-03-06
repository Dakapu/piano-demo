import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import pianoIcon from "../../img/piano.svg";
import fluteIcon from "../../img/flute.svg";
import "../../scss/navbar.scss";

const NavBar = () => {
  return (
    <ul className="nav justify-content-center p-3">
      <span className="text-white text-uppercase fs-4 me-5 cur">
        <FontAwesomeIcon icon={solid("music")} className="pe-3" />
        Music <span className="ps-5">|</span>
      </span>
      <li className="nav-item">
        <Link to="/piano" className="text-white text-uppercase nav-link">
          <img src={pianoIcon} alt="piano icon" className="icon-image me-1" />
          Piano
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/drums" className="text-white text-uppercase nav-link">
          <FontAwesomeIcon icon={solid("drum")} className="me-2" />
          Drums
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/flute" className="text-white text-uppercase nav-link">
          <img className="icon-image me-1" src={fluteIcon} alt="piano icon" />
          Flute
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
