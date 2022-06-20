import React, { Component } from "react";
import { useState } from "react";
import "../scss/piano.scss";

const Piano = () => {
  let [color, setColor] = useState("white");

  return (
    <svg
      version="1.1"
      id="pianoSVG"
      x="0px"
      y="0px"
      width="616.296px"
      height="384px"
      viewBox="-15.068 228.445 616.296 384"
      enableBackground="new -15.068 228.445 616.296 384"
    >
      <g>
        <rect
          x="-4.599"
          y="235.889"
          fill={color}
          stroke="#000000"
          width="84.341"
          height="370.608"
          className="note-C"
          onMouseDown={() => setColor((color = "lime"))}
          onMouseUp={() => setColor((color = "white"))}
        />
        <rect
          x="80.24"
          y="235.889"
          fill="#FFFFFF"
          stroke="#000000"
          width="84.341"
          height="370.608"
          className="note-D"
        />
        <rect
          x="165.079"
          y="235.889"
          fill="#FFFFFF"
          stroke="#000000"
          width="84.341"
          height="370.608"
          className="note-E"
        />
        <rect
          x="249.917"
          y="235.889"
          fill="#FFFFFF"
          stroke="#000000"
          width="84.341"
          height="370.608"
          className="note-F"
        />
        <rect
          x="334.757"
          y="235.889"
          fill="#FFFFFF"
          stroke="#000000"
          width="84.34"
          height="370.608"
          className="note-G"
        />
        <rect
          x="419.596"
          y="235.889"
          fill="#FFFFFF"
          stroke="#000000"
          width="84.34"
          height="370.608"
          className="note-A"
        />
        <rect
          x="504.435"
          y="235.889"
          fill="#FFFFFF"
          stroke="#000000"
          width="84.34"
          height="370.608"
          className="note-B"
        />
        <rect
          x="59.071"
          y="236.069"
          fill="#222221"
          stroke="#000000"
          width="42.679"
          height="211.014"
          className="note-Cis"
        />
        <rect
          x="143.563"
          y="236.069"
          fill="#222221"
          stroke="#000000"
          width="42.679"
          height="211.014"
          className="note-Dis"
        />
        <rect
          x="312.937"
          y="236.069"
          fill="#222221"
          stroke="#000000"
          width="42.68"
          height="211.014"
          className="note-Fis"
        />
        <rect
          x="396.819"
          y="236.069"
          fill="#222221"
          stroke="#000000"
          width="42.68"
          height="211.014"
          className="note-Gis"
        />
        <rect
          x="482.5"
          y="236.069"
          fill="#222221"
          stroke="#000000"
          width="42.68"
          height="211.014"
          className="note-Ais"
        />
      </g>
    </svg>
  );
};

export default Piano;
