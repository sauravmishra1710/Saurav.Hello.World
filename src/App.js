import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home.js";
import About from "./components/about/About";
import Skills from "./components/skills/Skills_new";
import Contact from "./components/contact/Contact.js";
import Socials from "./components/socials/Socials.js";
import ThemeProvider from "./utility/themeContextProvider.js";
import React, { useState, useEffect } from "react";
import Projects from "./components/projects/projects.js";
import Publications from "./components/publications/publications.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import Navbar from "./components/navbar/navbar.js";

function App() {
const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

return (
  <Router>
    <ThemeProvider>
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/aboutSection" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Footer />} />
      </Routes>
      <Footer />
    </div>
    </ThemeProvider>
  </Router>
);
}

export default App;
