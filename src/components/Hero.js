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
              <h1>say</h1>
              <h1>something</h1>
              <h1>clever</h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto: "abharris@outlook.com"
              `}
              className="primary-btn"
            >
              CONTACT ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
