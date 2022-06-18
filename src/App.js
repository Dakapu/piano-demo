import NavBar from "./common/navbar";
import Instrument from "./common/instrument";
import "./scss/App.scss";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Instrument />
    </React.Fragment>
  );
}

export default App;
