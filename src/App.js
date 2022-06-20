import NavBar from "./components/common/navbar";
import Card from "./components/common/card";
import "./scss/App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="piano" element={<Card title="piano" />} />
        <Route path="drums" element={<Card title="drums" />} />
        <Route path="flute" element={<Card title="flute" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
