import React from "react";
import Hero from "./Hero";
import electionCoverage from "../images/election-coverage.JPG";
import electionCoverageSmall from "../images/election-coverage-small.JPG";
import Section from "./Section";
import { weather } from "../data/WeatherProject.js";
import { bluey } from "../data/BlueyProject.js";

function Portfolio() {
  return (
    <div className="container">
      <Hero h1="Kelly Meleshko" />
      <Section project={weather} />
      <Section project={bluey} />

      <div className="visualisations">
        <div className="section">
          <div className="clearfix">
            <h3>Election coverage</h3>
            <p>
              I am always looking for opportunities to visualise data, whether
              it be election results, Census data or even timelines.
            </p>
            <p>
              I am interested in learning Python or R to build my expertise in
              this area. At the moment I use{" "}
              <a
                href="https://www.datawrapper.de/"
                target="_blank"
                title="Datawrapper: Charts, maps, tables"
                rel="noreferrer"
              >
                Datawrapper
              </a>{" "}
              and{" "}
              <a
                href="https://flourish.studio/"
                target="_blank"
                title="Flourish Studio"
                rel="noreferrer"
              >
                Flourish
              </a>
              . I have found my coding knowledge very useful in extending what's
              possible with these tools.{" "}
            </p>
            <p>
              I wrote a{" "}
              <a
                href="https://thewest.com.au/politics/federal-election/federal-election-2022-how-every-wa-electorate-voted-down-to-individual-polling-places-c-7068671"
                target="_blank"
                title="Election coverage"
                rel="noreferrer"
              >
                story about election data
              </a>{" "}
              which used extensive graphs and maps.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
