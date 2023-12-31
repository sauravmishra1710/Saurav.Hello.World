import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home.js";
import About from "./components/about/About.js";
import Skills from "./components/skills/Skills.js";
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
} from "react-router-dom";
import ScrollToTop from "./utility/ScrollToTopOnRouteChange.js";
import Preloader from "./components/preloader/preloader";
import Navbar from "./components/navbar/navbar.js";

function App() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreenLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <Preloader load={screenLoading} />
        <div className="App" id={screenLoading ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_me" element={<About />} />
            <Route path="/my_projects" element={<Projects />} />
            <Route path="/skills_and_certifications" element={<Skills />} />
            <Route path="/books_and_publications" element={<Publications />} />
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
