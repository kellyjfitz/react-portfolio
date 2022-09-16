import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { faImagePortrait } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="fixed-bottom">
      <a
        href="https://github.com/kellyjfitz/rate-calculator"
        target="_blank"
        title="See this site on GitHub"
        rel="noopener noreferrer"
        className="icon"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>

      <a
        href="https://playful-strudel-6e76b8.netlify.app/portfolio.html"
        target="_blank"
        title="Kelly Meleshko's portfolio"
        rel="noopener noreferrer"
        className="icon"
      >
        <FontAwesomeIcon icon={faImagePortrait} className="portfolio" />
      </a>

      <a
        href="https://au.linkedin.com/in/kelly-meleshko"
        target="_blank"
        title="Kelly Meleshko's LinkedIn"
        rel="noopener noreferrer"
        className="icon"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </footer>
  );
}

export default Footer;
