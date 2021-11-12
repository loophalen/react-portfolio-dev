import React from "react";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hello, I'm Austin{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>web developer</h1>
              <h1>designer</h1>
              <h1>musicain</h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>
              I am full-stack web developer with a focus on React. I believe
              that websites should be simple, elegant, and functional.
            </p>
          </Fade>
          <Fade bottom>
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
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
