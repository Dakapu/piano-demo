import React, { Component } from "react";
import Piano from "../piano";
import Drums from "../drums";
import Flute from "../flute";
import "../../scss/card.scss";

const Card = ({ title }) => {
  function getComponent() {
    switch (title) {
      case "Piano":
        return <Piano />;
        break;
      case "Drums":
        return <Drums />;
        break;
      case "Flute":
        return <Flute />;
        break;

      default:
        break;
    }
  }

  return (
    <div className="container  mx-auto text-center">
      <div className="card text-center col-10 mx-auto">
        <div className="card-body">
          <h5 className="card-title text-uppercase fw-bold ">{title}</h5>
          {getComponent()}
        </div>
      </div>
    </div>
  );
};

export default Card;
