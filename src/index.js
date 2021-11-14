import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./components/layout";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Hero />
      <Projects />
      <Footer />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
