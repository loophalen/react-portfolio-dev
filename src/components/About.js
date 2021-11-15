import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>about</h1>
            </Fade>
            <p>
              Every experienced software developer knows someone who double
              majored in English and music, played in a band, worked in retail,
              changed careers, took a coding bootcamp, changed careers again and
              found themselves working in tech. That’s me.<br></br>
              <br></br>I am experienced with HTML/CSS, JS, React, MySQL, SQL
              Server, MongoDB, Azure, Netlify, and Git. I am continuously
              learning and am eager to tackle technical and design challenges to
              create simple, elegant, and functional applications.
              <br></br>
              <br></br>
              Currently, I am focused on learning React and am excited to expand
              my skills as a developer.
            </p>
          </div>
          <div className="image-wrapper">
            <img src="./ahbw.png" alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
