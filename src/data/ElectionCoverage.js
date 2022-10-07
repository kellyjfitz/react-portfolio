import electionCoverage from "../images/election-coverage.JPG";
import electionCoverageSmall from "../images/election-coverage-small.JPG";

const election = {
  link: "https://thewest.com.au/politics/federal-election/federal-election-2022-how-every-wa-electorate-voted-down-to-individual-polling-places-c-7068671",
  title: "Election coverage",
  image: electionCoverage,
  imageAlt: "Screenshot of election coverage",
  mobileImage: electionCoverageSmall,
  text: (
    <div>
      <p>
        I am always looking for opportunities to visualise data, whether it be
        election results, Census data or even timelines.
      </p>
      <p>
        I am interested in learning Python or R to build my expertise in this
        area. At the moment I use{" "}
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
        I wrote a story about election data which used extensive graphs and
        maps.
      </p>
    </div>
  ),

  buttonText: "Go to election coverage",
};
export { election };
