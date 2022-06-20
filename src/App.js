import NavBar from "./components/common/navbar";
import Card from "./components/common/card";
import "./scss/App.scss";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Card title="Piano" />
    </React.Fragment>
  );
}

export default App;
