import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

const NavBar = () => {
  return (
    <ul>
      <li>
        <FontAwesomeIcon icon={solid("paw")} />
        Pet
      </li>
      <li>
        <FontAwesomeIcon icon={solid("car")} />
        Car
      </li>
      <li>
        <FontAwesomeIcon icon={regular("map")} />
        House
      </li>
    </ul>
  );
};

export default NavBar;
