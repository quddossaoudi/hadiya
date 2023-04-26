import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home/Home";
import Contact from "../../Components/Contact/Contact";
import About from "../../Components/About/About";

function Main() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/contact":
      component = <Contact />;
      break;
  }
  return (
    <div>
      <Navbar />
      {component}
    </div>
  );
}

export default Main;
