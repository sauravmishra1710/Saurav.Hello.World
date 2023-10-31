import React, { useContext } from "react";
import "./about.css";
import ThemeContext from "../../utility/themeContext";

const About = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="about-parent">
        <div
          style={{
            marginTop: "50px",
            // height: "83vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: theme ? "black" : "white",
            color: theme ? "white" : "black"
          }}
        >
          <div
            style={{
              padding: "10px",
              marginTop: "10px",
              width: "80%"
            }}
          >
            <div className="about-text" id="aboutSection">
              <h2 id="aboutHeading">The Journey Begins Here</h2>
              <p>
                Hey there! I'm Saurav, a passionate software engineer with a
                strong affinity for AI, Computer Vision in the healthcare domain, and web development.
              </p>
              <h3>
                <b>Professional Prowess</b>
              </h3>
              <p>
                Professionally, I am a part of the talented team at Oracle
                Cerner as working as a SOftware ENgineer IV. 
              </p>
              <h3>
                <b>Cooking and Coding Connoisseur</b>
              </h3>
              <p>
                In my world, cooking and coding share the spotlight. I take
                pride in my culinary skills and can whip up a mean dish when
                inspiration strikes.
              </p>
              <h3>
                <b>Beyond the Résumé</b>
              </h3>
              <p>
                While my résumé might paint a picture of a typical tech
                enthusiast, there's more to me than meets the eye. I have an
                insatiable love for cooking, travelling, and nature photography.
                I aspire to visit trails as humanly possible. It's a thrilling way to
                disconnect from the digital world and reconnect with nature.
              </p>
              <p>
                ...
              </p>
              <h3>
                <b>Let's Connect and Collaborate</b>
              </h3>
              <p>
                I thrive on collaboration and the opportunity to work with
                like-minded individuals. Whether you want to discuss the latest
                world affairs, share street food recommendations, or brainstorm
                over a cup of chai, I'm always eager to connect on LinkedIn and
                explore exciting opportunities together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
