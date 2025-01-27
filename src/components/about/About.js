import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import "./about.css";
import ThemeContext from "../../utility/themeContext";
import { Bounce, Fade } from "react-reveal";
import { Link } from "react-router-dom";

import chefToon3d from "../../img/page_logos/3d_chef.jpg";
import professional_toon from "../../img/page_logos/professional_toon.jpg";
import photographer_boy from "../../img/page_logos/photographer_boy.jpg";
import programmer from "../../img/page_logos/programmer.png";
import photoon from "../../img/page_logos/photoon.jpg";
import programmer_toon from "../../img/page_logos/programmer_toon.png";
import coding_toon from "../../img/page_logos/coding_toon.jpg";
import chefToon from "../../img/page_logos/chef_toon.svg";
import collaborateToon from "../../img/page_logos/collaborateToon.jpg";

const About = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="about-parent">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: theme ? "white" : "black",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              padding: "10px",
              width: "90%",
            }}
          >
            <div className="about-text" id="aboutSection">
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col md={4} className="imgsToAdjust" style={{ zIndex: "-1" }}>
                  <Row>
                    <Col lg={6} xs={3}>
                      <Bounce top duration={1000}>
                        <div>
                          <img
                            src={professional_toon}
                            alt=""
                            className="about-cliparts"
                          />
                        </div>
                      </Bounce>
                    </Col>
                    <Col lg={6} xs={3}>
                      <Bounce left duration={1000}>
                        <div>
                          <img
                            src={programmer_toon}
                            alt=""
                            className="about-cliparts"
                          />
                        </div>
                      </Bounce>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <Bounce left duration={1000}>
                        <div>
                          <img
                            src={chefToon3d}
                            alt=""
                            className="about-cliparts"
                          />
                        </div>
                      </Bounce>
                    </Col>
                    <Col lg={6}>
                      <Bounce bottom duration={1000}>
                        <div>
                          <img
                            src={photoon}
                            alt=""
                            className="about-cliparts"
                          />
                        </div>
                      </Bounce>
                    </Col>
                  </Row>
                </Col>
                <Col md={7} style={{ marginRight: "20px" }}>
                  <h1 className="purple heading">Me in a Nutshell</h1>
                  <p>
                    A passionate individual who always thrives to work on front
                    end solutions which develop sustainable systems to create
                    impact. I have a strong affinity for working on and
                    developing{" "}
                    <span className="purple">
                      <b> Artificial Intelligence</b>
                    </span>
                    ,{" "}
                    <span className="purple">
                      <b>
                        {" "}
                        Computer Vision solutions for the healthcare domain
                      </b>
                    </span>
                    . More recently, I have developed a strong interest towards
                    developing front-end web solutions.
                  </p>
                  <p>
                    Outside of the techno world, my love for the nature takes me
                    travelling places to explore the unexplored, have new
                    experiences, get new inspirations, and{" "}
                    <span className="purple">
                      <b> be on toes for the surprises the life has in store</b>
                    </span>{" "}
                    for me.
                  </p>
                  <p>
                    I am a{" "}
                    <span className="purple">
                      <b> big foodie with a very diverse taste buds</b>
                    </span>
                    . My explorations for lip smacking food is endless. I love
                    to try out every cuisine when I get the chance. Food is
                    another movitation to explore places and keep learnig about
                    the culinary practices of any region.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <h1 className="purple heading">Techinical Prowess</h1>
                  <p>
                    Professionally, I work for Oracle Health & AI as a Software
                    Engineer IV. Over the years, I have been lucky to have got
                    the chance to work on both sides of the front-end
                    application development. The
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
                    majority of my professional journey with C# .Net, I needed
                    to explore something new which has now put me in my path to
                    explore the{" "}
                    <span className="purple">
                      <b>Ocean of Web</b>
                    </span>{" "}
                    applications. And nothing better than starting to react with
                    React. This new phase has been all sort of enthusiasm to
                    gain a plethora of knowledge with web technologies. Not only
                    React, but you get to know HTML, Javascript, CSS, & other
                    learnings the web world has to offer and that makes things
                    more exciting.
                  </p>
                  <p></p>
                  <p>
                    Beyond my professional coding explorations, I never miss a
                    chance to get involved with code to remain updated with the
                    latest technologies, and skills that interests me. Having
                    been introduced to programming from as early as 5th
                    standard, the &nbsp;
                    <a href="https://www.calormen.com/jslogo/" target="_blank">
                      <span className="purple">
                        <b>TURTLE</b>
                      </span>
                    </a>
                    &nbsp;in&nbsp;
                    <a
                      href="https://en.wikipedia.org/wiki/Logo_(programming_language)"
                      target="_blank"
                    >
                      <span className="purple">
                        <b>LOGO</b>
                      </span>
                    </a>
                    &nbsp; with its basic set of actions -{" "}
                    <span className="purple">
                      <b> FD</b>
                    </span>
                    ,{" "}
                    <span className="purple">
                      <b> BK</b>
                    </span>
                    ,{" "}
                    <span className="purple">
                      <b> RT</b>
                    </span>
                    , &{" "}
                    <span className="purple">
                      <b> LT</b>
                    </span>{" "}
                    got me intrigued into the fascinating world of computers and
                    programming. This curiosity to expand my skillset has driven
                    me towards learning Python & developing light-weight
                    front-end stuffs with python . I have a great affinity for{" "}
                    <span className="purple">
                      <b>
                        deep learning and computer vision in the healthcare
                        domain
                      </b>
                    </span>
                    . The field of Artificial Intelligence is evolving faster
                    than ever and is predicted to grow increasingly pervasive as
                    technology develops, revolutionising various sectors
                    including healthcare with cutting-edge development across
                    the globe. This drives me to keep pace with these
                    innovations in AI and computer vision space within the
                    healthcare domain and ensure that I keep evolving
                    technically.
                  </p>
                </Col>
                <Col md={4}>
                  <Bounce right duration={1000}>
                    <div style={{ marginLeft: "20px" }}>
                      <img src={programmer} id="programmer" alt="" />
                    </div>
                  </Bounce>
                </Col>
              </Row>
              <p></p>
              <Row>
                <Col md={4}>
                  <h1 className="purple heading">The Three Cs</h1>
                  <p>Define myself in 3 Words?</p>
                  <p>
                    <span className="purple">
                      <b>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coding, Cooking, &
                        Camera...
                      </b>
                    </span>
                  </p>
                  <p></p>
                  <p>
                    <p>&nbsp;</p>
                    <span className="purple" style={{ fontSize: "2rem" }}>
                      <b>Coding... 👨‍💻</b>
                    </span>{" "}
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I guess we have spoken enough
                    about it. More about my coding explorations can be found in
                    the &nbsp;
                    <Link
                      to="/skills_and_certifications"
                      aria-label="Navigate to skills page"
                    >
                      skills
                    </Link>
                    &nbsp;page & the{" "}
                    <Link
                      to="/my_projects"
                      aria-label="Navigate to skills page"
                    >
                      projects
                    </Link>
                    &nbsp; page...
                  </p>
                  <p></p>
                </Col>
                <Col md={8}>
                  <Bounce right duration={1000}>
                    <div id="coding-img-div">
                      <img src={coding_toon} id="coding-img" alt="" />
                    </div>
                  </Bounce>
                </Col>
              </Row>
              <p>&nbsp;</p>
              <Row className="cooking-section">
                <Col md={4}>
                  <Bounce right duration={1000}>
                    <div>
                      <img src={chefToon} alt="" id="chef" />
                    </div>
                  </Bounce>
                </Col>
                <Col md={8}>
                  <div>
                    <p>
                      <span className="purple" style={{ fontSize: "2rem" }}>
                        <b>Cooking...🧑‍🍳</b>
                      </span>{" "}
                    </p>
                    <p>
                      A hobby... a stress buster... whatever it be like, I love
                      to cook. I take{" "}
                      <span className="purple">
                        <b>pride in my culinary skills</b>
                      </span>
                      . Like I want to develop my coding skills, I want to be{" "}
                      <span className="purple">
                        <b>emerging and evolving in my cooking explorations</b>
                      </span>{" "}
                      too. Cooking with love for family, friends and serving
                      something that excites the taste buds is my passion. The
                      <span className="purple">
                        <b> inspiration for cooking comes from my mother</b>
                      </span>{" "}
                      (as it does for everone who loves cooking) and the
                      realisation that I can cook well comes with every
                      appreciation from friends, and family. And with every such
                      realisation, comes{" "}
                      <span className="purple">
                        <b>
                          more confidence to try my hands on something new the
                          next time
                        </b>
                      </span>
                      . Too early to tell, but I guess my youngest & the best
                      fan girl has been my 'lil daughter{" "}
                      <span className="purple">
                        <b>Kia</b>
                      </span>{" "}
                      ❤️ who I love cooking for.
                    </p>
                    <p></p>
                    <p>
                      An avid follower of the cullinary shows, all of the Master
                      Chef Series, the chefs and their little nuskha's keep
                      driving me. Learning new plating skills which is one of my
                      very important aspect as people always eat the food
                      visually first, is it looking good, is it appealing, not
                      appealing. We always enjoy seeing food first as it
                      preceeds consumption. I very well intend to ever{" "}
                      <span className="purple">
                        <b>
                          keep this passion alive and whip up new dishes always
                        </b>
                      </span>
                      .
                    </p>
                    <p>
                      A glimpse of my cooking and cullinary skills is shared in
                      the &nbsp;
                      <Link to="/socials" aria-label="Navigate to socials page">
                        Socials
                      </Link>
                      .
                    </p>
                  </div>
                </Col>
              </Row>
              <p></p>
              <Row>
                <Col md={9}>
                  <div>
                    <p>
                      <span className="purple" style={{ fontSize: "2rem" }}>
                        <b>Camera... 📸</b>
                      </span>
                    </p>
                    <p>
                      An enthusiastic photographer, the joys of photographing
                      nature & landscapes is immense to me. Great landscapes,
                      beautiful sceneries, mountains, rivers, valleys excites me
                      in the same way like{" "}
                      <span className="purple">
                        <b>
                          {" "}
                          that small 'lil kid getting excited on entering the
                          house of candies
                        </b>
                      </span>
                      . I guess this hidden passion and intensity for landscape
                      and nature photography comes from{" "}
                      <span className="purple">
                        <b> my father</b>
                      </span>
                      . He was fond of travelling, exploring new places and made
                      sure he always carried his{" "}
                      <span className="purple">
                        <b> Kodak 📸</b>
                      </span>
                      . Capturing all the beautiful landscapes, family pictures
                      and then waiting for the films to get developed days after
                      the vacation.{" "}
                      <span className="purple">
                        <b>
                          {" "}
                          The excitement of waiting for the pictures then brewed
                          the passion I have now
                        </b>
                      </span>
                      .
                    </p>
                    <p>
                      The fresh air and the spectacular views be it a bright
                      sunny day or a coludy rainy day, photography is worth any
                      kind of conditions and environment. It’s about being at
                      the right place at the right time. Sometimes you get
                      lucky, and sometimes it's about waiting for that
                      right moment and the right place to get the right click.
                      Whatever it be like,{" "}
                      <span className="purple">
                        <b> it's all worth the wait</b>
                      </span>
                      . Making those random road side stops just because you
                      just got spectacular view of the sunset. Or waiting for
                      that 'lil extra time to get the best shot.
                      <span className="purple">
                        <b> Every wait in photography seems good</b>
                      </span>
                      .
                    </p>
                    <p>
                      It just does not finish after that one click, a series of
                      clicks follows and choosing your best shot, the post
                      processing involved to enhance the picture,{" "}
                      <span className="purple">
                        <b>
                          it's all a great learning experience with every single
                          picture
                        </b>
                      </span>
                      . It helps develop a keen attention to detail to notice
                      slight changes in your field of view. Every day will
                      invite you to explore something new (for e.g.{" "}
                      <span className="purple">
                        <b>
                          watch changing position of the sunrise moves northward
                          to southwards across seasons
                        </b>
                      </span>
                      ).{" "}
                      <span className="purple">
                        <b>That’s the real beauty of photography!</b>
                      </span>
                      . It opens up the shutter with an infinite possibilities
                      for field of views to capture with your camera. It’s all
                      about noticing those smallest of the details.
                    </p>
                    <p>
                      A glimpse of my experiments with clicks is shared in the
                      &nbsp;
                      <Link to="/socials" aria-label="Navigate to socials page">
                        Socials
                      </Link>
                      .
                    </p>
                  </div>
                </Col>
                <Col md={3}>
                  <Bounce top duration={1000}>
                    <div>
                      <img
                        src={photographer_boy}
                        alt=""
                        height={500}
                        width={500}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </Bounce>
                </Col>
              </Row>
              <Row className="collab-section">
                <Col md={3}>
                  <Fade bottom duration={2000}>
                    <div>
                      <img
                        src={collaborateToon}
                        alt=""
                        height={300}
                        width={250}
                      />
                    </div>
                  </Fade>
                </Col>
                <Col md={9}>
                  <div>
                    <br />
                    <h1 className="purple heading">Connect & Collaborate</h1>
                    <p>
                      I am always in for connecting & collaborating with
                      like-minded individuals for developing something{" "}
                      <span className="purple">
                        <b> cool with code</b>
                      </span>
                      , work on{" "}
                      <span className="purple">
                        <b> AI stuffs</b>
                      </span>
                      , talk about the{" "}
                      <span className="purple">
                        <b> culinary experiences</b>
                      </span>
                      , go on a{" "}
                      <span className="purple">
                        <b> nature photography</b>
                      </span>{" "}
                      tour, talk about{" "}
                      <span style={{ color: "red" }}>
                        <b>Manchester United</b>
                      </span>
                      ,{" "}
                      <span className="purple">
                        <b>Cricket</b>
                      </span>
                      ,{" "}
                      <span style={{ color: "red" }}>
                        <b>Royal Challengers Bangalore</b>
                      </span>
                      , or just have a{" "}
                      <span className="purple">
                        <b>
                          <s>chai</s> coffee-pe-charcha
                        </b>
                      </span>{" "}
                      I'm always ready. I am available in almost every social
                      platform and my inbox is open for all.
                      <p>
                        <br></br>
                        I am just a{" "}
                        <span className="purple">
                          <b>request away</b>
                        </span>{" "}
                        to collaborate.
                        
                      </p>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
