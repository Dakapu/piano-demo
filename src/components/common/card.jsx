import React, { Component } from "react";
import "../../scss/card.scss";

const Card = ({ title }) => {
  return (
    <div className="container  mx-auto text-center">
      <div className="card text-center col-10 mx-auto">
        <div className="card-body">
          <h5 className="card-title text-uppercase fw-bold ">{title}</h5>
          {/* Component for Instrument porps -> instrument={title} */}
          <p className="card-text">Press the keys and play the notes~</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
