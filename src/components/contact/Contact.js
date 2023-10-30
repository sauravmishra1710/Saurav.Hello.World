import React, { useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./contact.css";
import emailjs from "@emailjs/browser";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import ThemeContext from "../../utility/themeContext";
import { Icon } from '@iconify/react';
import contactLogo from '../../img/svg/connection.svg';

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

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
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
    let formData = { name: name, email: email, message: msg };
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
          setInfo("Oops!!! Something is wrong");
          setLoading(false);
        }
      );
  }

  function handleSubmit(event) {
    if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
      setError("No name. Lord Voldemort?");
    } else if (email === "" || !validEmailRegex.test(email)) {
      setError("You missed entering correct email ID!");
    } else if (msg === "") {
      setError("I don't read minds, please type some message!");
    } else {
      setLoading(true);
      setError("");
      sendEmail();
    }
  }

  return (
    
        <div
          id="contact-section"
          style={{
            // background: theme
            //   ? "linear-gradient(to right,#232526,#414345)"
            //   : "white",
            // color: theme ? "white" : "black"
          }}

        >
          <Row>
            <Col md={6}>
            <div className="contact-heading">
              <h1 className="heading">Reach out to me...</h1>
              <div className="connect-with-me-text">
                <p>Thank you for visiting my space. Feel free to reach out, and let's embark on this journey of knowledge sharing, innovation, 
                cullinary skills, lipsmacking food discoveries, cricket, football, and photography discoveries together. Always up to work on 
                stuffs related to AI and Computer Vision in the healthcare domains. I am available in almost every social platform.
                My Inbox is always open for all.</p>
              </div>
              <div>
              <li className="social-icons">
                      <a
                        href="https://github.com/sauravmishra1710"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <Icon icon="logos:github-icon" style={{fontSize: '40px', marginRight: '20px'}}/>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/saurav-mishra1710/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <Icon icon="logos:linkedin-icon" style={{fontSize: '40px'}}/>
                      </a>
                    </li>
              </div>
              </div>
          </Col>
          <Col md={5}>
          <div class="col-lg-6 connect-image">
            <img  class= "connection" src={contactLogo} alt="" height={800} width={800} />
        </div>
          </Col>
          </Row>
          <Row>
          <div className="contact-row">
            <div className="contact">
              <div className="contact-card">
                <div className="contact-form">
                  <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
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
                    placeholder="Your E-mail ID"
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
                    placeholder="Have something to say..."
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
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={open}
                    autoHideDuration={4000}
                    onClose={() => setOpen(false)}
                  >
                    <Alert severity="error" sx={{ width: "100%" }}>
                      There is some afdf
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
          </Row>
        </div>
  );
}

export default Contact;
