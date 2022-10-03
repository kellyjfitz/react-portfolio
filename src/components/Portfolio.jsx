import React from "react";
import Hero from "./Hero";
import bluey2 from "../images/bluey2.png";
import blueymobile from "../images/bluey-mobile.png";
import weatherApp from "../images/weather-app2.png";
import weatherMobile from "../images/weather-mobile.png";
import electionCoverage from "../images/election-coverage.JPG";
import electionCoverageSmall from "../images/election-coverage-small.JPG";

function Portfolio() {
  return (
    <div className="container">
      <Hero h1="Kelly Meleshko" />
      <div className="section clearfix">
        <a
          href="https://sage-jalebi-b44e5a.netlify.app/"
          target="_blank"
          title="Weather app"
          rel="noreferrer"
        >
          {" "}
          <img
            src={weatherApp}
            alt="A screenshot of the weather app"
            className="img-fluid  col-sm-6  float-sm-end ms-3 sm-hide"
          />
        </a>
        <h3>
          <a
            href="https://sage-jalebi-b44e5a.netlify.app/"
            target="_blank"
            title="Weather app"
            rel="noreferrer"
          >
            Weather app
          </a>
        </h3>
        <p>This app was the final project for the SheCodes Plus workshop.</p>
        <p>
          It fetches data from the OpenWeather API based on a city search or the
          user's current location. Although not required by the project, I set
          the time and date to match the timezone of the location being searched
          for rather than the user's timezone. For example; it is 9am in Sydney,
          Australia but when I search for Kyiv the time in the weather app shows
          me that it is 2am in Kyiv. I did this because I think the current
          weather conditions are more meaningful if you have the current time.
        </p>
        <img
          src={weatherMobile}
          className="img-fluid   sm-show mt-1 mb-3"
          alt="A screenshot of the weather app"
        />
        <p>
          I also added a night theme to the project, which is conditional on the
          local sunrise and sunset time. Again, using the Sydney versus Kyiv
          example, at 9am in Sydney the site would have a light blue background
          and black text. A search for Kyiv (where the local time was 2am) would
          change the page to a navy blue background and white text.{" "}
        </p>

        <button className="btn btn-info">
          <a
            href="https://sage-jalebi-b44e5a.netlify.app/"
            target="_blank"
            title="Weather app"
            rel="noreferrer"
          >
            Launch weather app
          </a>
        </button>
      </div>

      <div className="section clearfix">
        <a
          href="https://www.shecodes.io/workshops/shecodes-basics-fafed551-de54-4c46-8fff-483bff7a9b23/projects/796432"
          target="_blank"
          title="Bluey site"
          rel="noreferrer"
        >
          {" "}
          <img
            src={bluey2}
            alt="A screenshot of the Bluey website"
            className="img-fluid  col-sm-6  float-sm-end ms-3 sm-hide"
          />
        </a>
        <h3>
          <a
            href="https://www.shecodes.io/workshops/shecodes-basics-fafed551-de54-4c46-8fff-483bff7a9b23/projects/796432"
            target="_blank"
            title="Bluey site"
            rel="noreferrer"
          >
            Bluey fan site
          </a>
        </h3>
        <p>
          If you have small children and you don't know about this Australian
          cartoon - well, your life is about to change.{" "}
        </p>
        <p>
          I built this site as the final project for the SheCodes Basics
          workshop. It features basic HTML, CSS and Javascript.{" "}
        </p>
        <p>
          When I built this I hadn't yet learnt about Bootstrap grids or Flexbox
        </p>
        <button className="btn btn-info">
          {" "}
          <a
            href="https://www.shecodes.io/workshops/shecodes-basics-fafed551-de54-4c46-8fff-483bff7a9b23/projects/796432"
            target="_blank"
            title="Bluey site"
            rel="noreferrer"
          >
            {" "}
            Go to Bluey site
          </a>
        </button>
        <a
          href="https://www.shecodes.io/workshops/shecodes-basics-fafed551-de54-4c46-8fff-483bff7a9b23/projects/796432"
          target="_blank"
          title="Bluey site"
          rel="noreferrer"
        >
          <img
            src={blueymobile}
            className="img-fluid   sm-show mt-4"
            alt="A screenshot of the Bluey website"
          />
        </a>
      </div>

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
