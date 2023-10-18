import React, { useContext } from "react";
import "../css/about.css";
import { TypeAnimation } from "react-type-animation";
import ThemeContext from "../utility/themeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="about-parent">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme ? "black" : "white",
            color: theme ? "white" : "black"
          }}
        >
          <div className="parallax">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="hithere">
            Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span></div>
            <div className="parallax-text">
              <TypeAnimation
                sequence={[
                    "I'm Saurav", 1500,
                    "Welcome to Saurav.Hello.World", 1500,
                    "Learn & Code Everyday", 1500,
                    "AI, Computer Vision for Medicine & Healthcare", 1500,
                    "Enthusiast Photographer", 1500,
                    "Manchester United", 1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
