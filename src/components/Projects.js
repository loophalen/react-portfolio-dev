import React from "react";
import { projects } from "../data";
import Fade from "react-reveal/Fade";
import Card from "./Card";

export default function Projects() {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
