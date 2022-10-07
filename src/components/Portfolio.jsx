import React from "react";
import Hero from "./Hero";
import Section from "./Section";
import { weather } from "../data/WeatherProject.js";
import { bluey } from "../data/BlueyProject.js";
import { election } from "../data/ElectionCoverage.js";
import { dictionary } from "../data/Dictionary.js";
import { rateCalculator } from "../data/RateCalculator.js";

function Portfolio() {
  return (
    <div className="container">
      <Hero h1="Kelly Meleshko" />
      <Section project={rateCalculator} />
      <Section project={dictionary} />
      <Section project={weather} />
      <Section project={election} />
      <Section project={bluey} />
    </div>
  );
}

export default Portfolio;
