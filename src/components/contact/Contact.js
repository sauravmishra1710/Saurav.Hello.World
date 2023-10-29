import React, { useState, useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./contact.css";
import emailjs from "@emailjs/browser";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import ThemeContext from "../../utility/themeContext";
import { Icon } from '@iconify/react';

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
      <div className="contact-heading">
        <h1 className="heading">Reach out to me...</h1>
        <div className="connect-with-me-text">
          <p>Thank you for visiting my space. Feel free to reach out, and let's embark on this journey of knowledge sharing, innovation, 
          cullinary skills, lipsmacking food discoveries, cricket, football, and photography discoveries together. Always up to work on 
          stuffs related to AI and Computer Vision in the healthcare domains. I am avalible in almost every social platform.
          My Inbox is always open for all.</p>
        </div>
        <div>
        <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><Icon icon="logos:github-icon" style={{fontSize: '20px'}}/>
                </a>
              </li>
          {/* <ul class="ico">
            <li class="icon"><a href="https://github.com/AjitVerma15" target="_blank"></a><span class="iconify github" data-icon="ant-design:github-filled" data-inline="false"  data-width="50" data-height="50"></span></li>
            <li class="icon"><a href="https://www.instagram.com/ajit.verma_/" target="_blank"></a><span class="iconify instagram" data-icon="entypo-social:instagram-with-circle" data-inline="false" data-width="50" data-height="50"></span></li>
            <li class="icon"><a href="https://www.linkedin.com/in/ajit-verma-70b9b0196/" target="_blank"></a><span class="iconify linkedin" data-icon="entypo-social:linkedin-with-circle" data-inline="false"  data-width="50" data-height="50"></span></li>
            <li class="icon"><a href="mailto:ajitverma1503@gmail.com" target="_blank"></a><span class="iconify google" data-icon="ant-design:google-plus-circle-filled" data-inline="false" data-width="50" data-height="50"></span></li>
          </ul> */}
        </div>
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
    </div>
    </div>
  );
}

export default Contact;
