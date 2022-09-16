import React from "react";
import "../css/Hero.css";
export default function Hero(props) {
  return (
    <div className="hero">
      <h1>{props.h1}</h1>
      <h2>
        <span className="highlight">{props.h2}Data enthusiast</span> based in
        NSW, Australia
      </h2>
    </div>
  );
}
