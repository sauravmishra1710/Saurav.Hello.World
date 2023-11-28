import React, { useContext } from "react";
import "./about.css";
import ThemeContext from "../../utility/themeContext";
import { Bounce, Fade } from "react-reveal";

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
            color: theme ? "white" : "black",
          }}
        >
          <div
            style={{
              padding: "10px",
              marginTop: "10px",
              width: "80%",
            }}
          >
            <div className="about-text" id="aboutSection">
              <h2 id="heading">The Journey Begins Here</h2>
              <p>
                A passionate individual who always thrives to work on front end
                solutions which develop sustainable systems to create impact. I
                have a strong affinity for working on and developing Artificial
                Intelligence, Computer Vision solutions for the healthcare
                domain. More recently, I have developed a strong interest
                towards developing front-end web solutions.
              </p>
              <h3>
                <b>Techinical Prowess</b>
              </h3>
              <p>
                Professionally, I work for Oracle Health & AI as a Software
                Engineer IV. Over the years, I have been lucky to have got the
                chance to work on both sides of the front-end application
                development. The
                <span className="purple">
                  <b> Windows Desktop Applications</b>
                </span>{" "}
                as well as the{" "}
                <span className="purple">
                  <b> Web Applications</b>
                </span>
                . I started with{" "}
                <span className="purple">
                  <b>VB .Net</b>
                </span>
                , migrating to{" "}
                <span className="purple">
                  <b>C# .Net</b>
                </span>{" "}
                and bits & pieces with VC++ when needed. Having spent the
                majority of my profesional journey with C# .Net, I needed to
                explore something new which has now put me in my path to explore
                the{" "}
                <span className="purple">
                  <b>Ocean of Web</b>
                </span>{" "}
                applications. And nothing better that starting to react with
                React. This new phase has been all sort of enthusiasm to gain a
                plethora of knowledge with web technologies. Not only React, but
                you get to know HTML, Javascript, CSS, & other learnings the web
                world has to offer and that makes things more exciting.
              </p>
              <p></p>
              <p>
                <Bounce left duration={1000}>
                  <p>
                    Beyond my professional coding explorations, I never miss a
                    chance to get involved with code to remain updated with the
                    latest technologies, and skills that interests me. This
                    curiosity to expand my skillset has driven me towards
                    learning Python & developing light-weight front-end stuffs
                    with python . I have a great affinity for{" "}
                    <span className="purple">
                      <b>
                        deep learning and computer vision in the healthcare
                        domain
                      </b>
                    </span>
                    The world of Artificial Intelligence is evolving faster than
                    ever and is predicted to grow increasingly pervasive as
                    technology develops, revolutionising various sectors
                    including healthcare with cutting-edge development across
                    the globe. This drives me to keep pace with these
                    innovations in AI and computer vision space within the
                    healthcare domain and ensure that I keep evolving
                    technically.
                  </p>
                </Bounce>
                <p></p>
              </p>
              <h3>
                <b>The Three Cs</b>
              </h3>
              <p>
                Define myself in 3 Words?
                <br />
                <span className="purple">
                  <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coding, Cooking, & Camera...
                  </b>
                </span>
                <p></p>
                <p>
                  <span className="purple" style={{ fontSize: "3rem" }}>
                    <b>Coding...</b>
                  </span>{" "}
                  <br />I guess we have spoken enough about it...
                </p>
                <p></p>
                <div>
                  {" "}
                  <span className="purple" style={{ fontSize: "3rem" }}>
                    <b>Cooking...</b>
                  </span>{" "}
                  <br />A hobby... a stress buster... whatever it be like, I
                  love to cook. I take{" "}
                  <span className="purple">
                    <b>pride in my culinary skills</b>
                  </span>
                  . Like I want to develop my coding skills, I want to{" "}
                  <span className="purple">
                    <b>emerging and evolving in my cooking explorations</b>
                  </span>{" "}
                  too. Cooking with love for family, friends and serving
                  something that excites the taste buds is my passion. The
                  <span className="purple">
                    <b>inspiration for cooking comes from my mother</b>
                  </span>{" "}
                  (as it does for everone who loves cooking) and the realisation
                  that I can cook well came with every appreciation from
                  friends, and family. And with every such realisation, comes{" "}
                  <span className="purple">
                    <b>more confidence to try something new the next time</b>
                  </span>
                  . Too early to tell, but I guess my youngest & the best fan
                  girl has been my 'lil daughter{" "}
                  <span className="purple">
                    <b>Kia</b>
                  </span>{" "}
                  ❤️ who I love cooking for.
                  <p></p>
                  <p>
                    An avid follower of the cullinary shows, all of the Master
                    Chef Series, the chefs and their little nuskha's keep
                    driving me. Learning new plating skills which is one of my
                    very important aspect as people always eat the food visually
                    first, is it looking good, is it appealing, not appealing.
                    We always enjoy seeing food first as it preceeds
                    consumption. I very well intend to ever{" "}
                    <span className="purple">
                      <b>
                        keep this passion alive and whip up new dishes always
                      </b>
                    </span>
                    .
                  </p>
                  <p>
                    A glipmse of my cooking and cullinary skills is shared in
                    the Socials.
                  </p>
                  <p></p>
                  <div>
                    <span className="purple" style={{ fontSize: "3rem" }}>
                      <b>Camera...</b>
                    </span>
                  </div>
                </div>
              </p>
              <h3>
                <b>Beyond the Résumé</b>
              </h3>
              <p>
                While my résumé might paint a picture of a typical tech
                enthusiast, there's more to me than meets the eye. I have an
                insatiable love for cooking, travelling, and nature photography.
                I aspire to visit trails as humanly possible. It's a thrilling
                way to disconnect from the digital world and reconnect with
                nature.
              </p>
              <p>...</p>
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
