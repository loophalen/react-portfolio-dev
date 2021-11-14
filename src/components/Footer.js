import React from "react";

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <h1>contact</h1>
          <h2>abharris@outlook.com</h2>
          <div className="socialContainer">
            <a
              href="https://github.com/loophalen"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/austin-harris-/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              linkedin
            </a>
            <a
              href="https://twitter.com/codeaustincode"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              twitter
            </a>
            <a
              href="https://grandvapids.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              bandcamp
            </a>
          </div>
          <span>
            30305 © 2021 Made With <icon>❤</icon> by Austin
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
