import React, { useContext } from "react";
import "./home.css";
import ThemeContext from "../../utility/themeContext";
import Typewriter from "typewriter-effect";


const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  var app = document.getElementById('app');

  return (
    <>
      <div className="home">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="parallax">
            <h1 className="hithere">
            Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                <br/>I'm Saurav</h1>
                <div className="parallax-text">
                <Typewriter
                options={{
                    strings: [
                    "Welcome to My Space - Saurav.Hello.World",
                    "Learn & Code Everyday",
                    "AI, Computer Vision for Medicine & Healthcare",
                    "Enthusiast Photographer",
                    "Manchester United",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
