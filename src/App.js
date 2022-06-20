import NavBar from "./components/common/navbar";
import Card from "./components/common/card";
import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="*" element={<Card title="Not Found" />} />
        <Route path="/" element={<Card title="Piano" />} />
        <Route path="piano" element={<Card title="Piano" />} />
        <Route path="drums" element={<Card title="Drums" />} />
        <Route path="flute" element={<Card title="Flute" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
