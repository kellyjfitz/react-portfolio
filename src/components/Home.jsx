import React from "react";
import Hero from "./Hero";
import graph4 from "../images/graph4.png";

function Home() {
  return (
    <div className="container">
      <Hero h1="Kelly Meleshko" />
      <div className="section clearfix">
        <img
          src={graph4}
          className="img-fluid  col-sm-6  float-sm-end sm-hide ms-3"
          alt="A computer screen showing different
          kinds of graphs"
        />

        <h3 className="mb-4">What's so good about data?</h3>

        <p>
          Print media has always been constrained by space and what can
          physically be printed.
        </p>
        <p>
          With the explosion of digial media, many organisations are seizing the
          new storytelling opportunities that come with this medium.
        </p>
        <p>
          One part of this is data visualisation. While print media might have
          included a graph with a story, with digital media we can include a
          slideshow of graphs, or a map animation showing change over time. Or
          we can let the user interact with filters or clickable elements.{" "}
        </p>
        <p>
          When I read a story with a bunch of numbers and stats, it doesn't
          really sink in. But when someone visualises this same data, it becomes
          much more meaningful and engaging.
        </p>
        <img
          src={graph4}
          className="img-fluid rounded  sm-show"
          alt="A computer screen showing different kinds of graphs"
        />
      </div>

      <div className="section row ms-0 me-0">
        <h3 className="mb-4"> What's that got to do with coding?</h3>
        <div className="col-md-6">
          <p>It helps to understand how stuff works.</p>
          <p>
            If I have ideas about what would help build engagment with online
            readers, it's really missing a lot of context without some
            understanding about what is possible on a website and the effort
            versus reward.
          </p>
        </div>
        <div className="col-md-6">
          <p>
            There are some very good (and free!) online tools such as{" "}
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
            </a>{" "}
            that help you build data visualisations without any coding
            knowledge.
          </p>
          <p>
            But if you even have a tiny bit of knowledge you are able to really
            grow what you can do.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
