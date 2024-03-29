import React, { useState, useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./contact.css";
import emailjs from "@emailjs/browser";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import ThemeContext from "../../utility/themeContext";
import { Icon } from "@iconify/react";
import { Fade, Bounce } from "react-reveal";
import contactImgs from "../../img/page_logos/connect.jpg";
import thankyou from "../../img/page_logos/thankyou.jpeg";
import emailImg from "../../img/page_logos/email.svg";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contact() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const validEmailRegex = RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  );

  function isValidEmail(email) {
    return validEmailRegex.test(email);
  }

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        if (!isValidEmail(event.target.value)) {
          setError('Email is invalid. Please input a valid email.');
        } else {
          setError(null);
        }
        setEmail(event.target.value);
        break;
      case "message":
        setMsg(event.target.value);
        break;
      default:
        break;
    }
  }

  function sendEmail() {
    let formData = { from_name: name, from_email: email, message: msg };
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setInfo("I'll reply to you shortly, thanks!");
          setMsg("");
          setName("");
          setEmail("");
          setLoading(false);
        },
        (error) => {
          setInfo("Oops!!! Something went wrong. Try sending again.");
          setLoading(false);
        }
      );
  }

  function handleSubmit(event) {
    if (name.trim() === "") {
      setError("No name. Lord Voldemort?");
    } else if (email.trim() === "" || !validEmailRegex.test(email)) {
      setError("Please enter a valid email ID!");
    } else if (msg.trim() === "") {
      setError("I don't read minds, please type some message!");
    } else {
      setLoading(true);
      setError("");
      sendEmail();
    }
  }

  return (
    <>
      <Container fluid>
        <div
          id="contact-section"
          style={
            {
              // background: theme
              //   ? "linear-gradient(to right,#232526,#414345)"
              //   : "white",
              // color: theme ? "white" : "black"
            }
          }
        >
          <Row>
            <Col md={6}>
              <div className="contact-heading">
                <h1 className="heading purple">Reach out to me...</h1>
                <div className="connect-with-me-text">
                  <p>
                    Thank you for visiting my space{" "}
                      <span
                        className="purple"
                        style={{ fontSize: "20.0pt", fontWeight: "bold" }}
                      >
                        <b>Saurav.Hello.World</b>
                      </span>
                    .
                  </p>
                  <p>
                    Feel free to reach out, and let's embark on this journey of
                    <span className="purple">
                      <b>
                        {" "}
                        knowledge sharing, innovation, cullinary skills, lip
                        smacking food, cricket, football, & photography
                        discoveries{" "}
                      </b>
                    </span>
                    together. Always up to work on stuffs related to{" "}
                    <span className="purple">
                      <b>
                        deep learning & computer vision in the healthcare domain
                      </b>
                    </span>
                    .
                  </p>
                  <p></p>
                  <p>
                    I am available in almost every social platform and my Inbox
                    is always open for all...
                  </p>
                </div>
                <div>
                  <p>&nbsp;</p>
                  <Row>
                    <Col>
                      <Bounce top>
                        <li>
                          <div className="social-icons-container">
                            <a
                              href="https://github.com/sauravmishra1710"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon
                                icon="logos:github-icon"
                                className="social_icons"
                              />
                            </a>
                            Github @{" "}
                            <a
                              href="https://github.com/sauravmishra1710"
                              target="_blank"
                              rel="noreferrer"
                            >
                              sauravmishra1710
                            </a>
                          </div>

                          <div className="social-icons-container">
                            <a
                              href="https://scholar.google.com/citations?hl=en&user=t1GX3O8AAAAJ"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon
                                icon="academicons:google-scholar-square"
                                className="social_icons"
                              />
                            </a>
                            Google Scholar @{" "}
                            <a
                              href="https://scholar.google.com/citations?hl=en&user=t1GX3O8AAAAJ"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Saurav Mishra
                            </a>
                          </div>

                          <div className="social-icons-container">
                            <a
                              href="https://orcid.org/my-orcid?orcid=0000-0002-6107-0999"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon
                                icon="academicons:orcid-square"
                                className="social_icons"
                              />
                            </a>
                            ORCID @{" "}
                            <a
                              href="https://orcid.org/my-orcid?orcid=0000-0002-6107-0999"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Saurav Mishra
                            </a>
                          </div>

                          <div className="social-icons-container">
                            <a
                              href="https://www.linkedin.com/in/saurav-mishra1710/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon
                                icon="logos:linkedin-icon"
                                className="social_icons"
                              />
                            </a>
                            Linkedin @{" "}
                            <a
                              href="https://www.linkedin.com/in/saurav-mishra1710/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              saurav-mishra1710
                            </a>
                          </div>
                        </li>
                      </Bounce>
                    </Col>

                    <Col>
                      <Bounce bottom>
                        <li>
                          <div className="social-icons-container">
                            <a
                              href="https://twitter.com/forevrManUtd"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon
                                icon="devicon:twitter"
                                className="social_icons"
                              />
                            </a>
                            Tweet @{" "}
                            <a
                              href="https://twitter.com/forevrManUtd"
                              target="_blank"
                              rel="noreferrer"
                            >
                              forevrManUtd
                            </a>
                          </div>

                          <div className="social-icons-container">
                            <a
                              href="https://www.instagram.com/saurav.mishra1710/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon
                                icon="skill-icons:instagram"
                                className="social_icons"
                              />
                            </a>
                            Instagram @{" "}
                            <a
                              href="https://www.instagram.com/saurav.mishra1710/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              saurav.mishra1710
                            </a>
                          </div>

                          <div className="social-icons-container">
                            <a
                              href="https://www.instagram.com/flashyfilters.saurav1710/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon
                                icon="skill-icons:instagram"
                                className="social_icons"
                              />
                            </a>
                            More Insta @{" "}
                            <a
                              href="https://www.instagram.com/flashyfilters.saurav1710/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              flashyfilters.saurav1710
                            </a>
                          </div>
                        </li>
                      </Bounce>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Fade top>
                <div className="col-lg-6">
                  <img src={contactImgs} alt="" height={800} width={1000} id="collabImg" className="contactImgs"/>
                </div>
              </Fade>
            </Col>
          </Row>

          <Row style={{width:"90vw"}}>
            <h1 className="heading purple">
              {" "}
              Have something to talk about...?
            </h1>

            <div className="contact-div">
              <div id="emailImg">
                <Bounce left>
                  <div>
                    <img src={emailImg} alt="" height={300} width={345} />
                  </div>
                </Bounce>
              </div>
                <div className="contact-row">
                  <div className="contact">
                    <div className="contact-card">
                      <div className="contact-form">
                        <Snackbar
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          open={error !== ""}
                          autoHideDuration={4000}
                          onClose={() => setError("")}
                        >
                          <Alert severity="warning" sx={{ width: "100%" }}>
                            {error}
                          </Alert>
                        </Snackbar>

                        <input
                          type="text"
                          value={name}
                          onChange={handleChange}
                          name="name"
                          placeholder="Name"
                          autoComplete="off"
                          className="contact-field"
                          id="form-name"
                          required
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={handleChange}
                          name="email"
                          placeholder="Enter your E-mail ID"
                          autoComplete="off"
                          className="contact-field"
                          id="form-email"
                          required
                        />
                        <input
                          type="text"
                          value={msg}
                          onChange={handleChange}
                          name="message"
                          placeholder="Type your message..."
                          autoComplete="off"
                          className="contact-field"
                          id="form-message"
                          required
                        />

                        <LoadingButton
                          onClick={handleSubmit}
                          endIcon={<SendIcon />}
                          loading={loading}
                          loadingPosition="end"
                          variant="contained"
                        >
                          <span>Send</span>
                        </LoadingButton>
                        <Snackbar
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          open={open}
                          autoHideDuration={4000}
                          onClose={() => setOpen(false)}
                        >
                          <Alert severity="error" sx={{ width: "100%" }}>
                            There is some error.
                          </Alert>
                        </Snackbar>
                        <Snackbar
                          anchorOrigin={{ vertical: "bottom", horizontal: "" }}
                          open={info !== ""}
                          autoHideDuration={5000}
                          onClose={() => setInfo("")}
                        >
                          <Alert severity="success" sx={{ width: "100%" }}>
                            {info}
                          </Alert>
                        </Snackbar>
                        {info !== "" ? <h3 id="information">{info}</h3> : null}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </Row>
          <Row>
            <Bounce bottom>
              <div>
                <img src={thankyou} alt="" id="thankyou" className="contactImgs" height={400} width={1500} />
              </div>
            </Bounce>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Contact;
