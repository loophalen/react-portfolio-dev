import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            ah.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>work</button>
            <button onClick={() => scrollTo("#about")}>about</button>
            <button onClick={() => scrollTo("#contact")}>contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
