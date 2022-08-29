import React from "react";
import "../css/Contact.css";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import emailjs from "emailjs-com";
import { useState } from "react";

function ContactIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      {/* these (d="code") are picked from the bootstrap svg html codes */}
    </SvgIcon>
  );
}
function LocationIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      {/* these (d="code") are picked from the bootstrap svg html codes */}
    </SvgIcon>
  );
}
function MailIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
      {/* these (d="code") are picked from the bootstrap svg html codes */}
    </SvgIcon>
  );
}
function WebIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
      {/* these (d="code") are picked from the bootstrap svg html codes */}
    </SvgIcon>
  );
}

export default function Contact() {
  //   function SendEmail(e) {
  //     e.preventDefault();
  //     // to stop reload

  //     emailjs.sendForm(
  //       "service_vyzxyzp",
  //       "template_ev8q18i",
  //       e.target,
  //       "5Z_eSsMNmETzCY3aX"
  //     );
  //   }

  const [mssg, setTitle] = useState("");
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [sub, setSubject] = useState("");

  return (
    <div className="Contact-container" id="Contact">
      <div className="Contact-heading">
        <h1>Contact Me</h1>
        <h3 className="Contact-subhead">Have Any Questions?</h3>
        <h3 className="Contact-subhead2">I am at your Service</h3>
      </div>
      <div className="Contact-body">
        <div className="Contact-info">
          <div className="Contact-informations">
            <ContactIcon
              id="Contact-icons"
              sx={{ color: "salmon", fontSize: "40px" }}
            />
            <h2>Call Me on</h2>
            <h3>+91 9654283574</h3>
          </div>
          <div className="Contact-informations">
            <LocationIcon sx={{ color: "salmon", fontSize: "40px" }} />
            <h2>Address</h2>
            <h3>5, Ram Nagar, Krishna Nagar, Delhi-110051</h3>
          </div>
          <div className="Contact-informations">
            <MailIcon sx={{ color: "salmon", fontSize: "40px" }} />
            <h2>Email</h2>
            <h3>ansh1mondal@gmail.com</h3>
          </div>
          <div className="Contact-informations">
            <WebIcon sx={{ color: "salmon", fontSize: "40px" }} />
            <h2>Website</h2>
            <h3>
              <a href="https://anshmondal.netlify.app/" target="blank">
                https://anshmondal.netlify.app/
              </a>
            </h3>
          </div>
        </div>
        <div className="Contact-sendMail">
          <div className="mail-heading">
            <h1>Send me an Email</h1>
            <h2>I am very responsive to Messages!</h2>
          </div>
          <form>
            <div className="Message-writing">
              <div className="Message-box">
                <TextField
                  className="Contact-boxes"
                  id="Name-box"
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="Message-box">
                <TextField
                  className="Contact-boxes"
                  id="Email-box"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  name="user_email"
                  type={"email"}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="Message-box">
                <TextField
                  className="Contact-boxes"
                  id="Subject-box"
                  label="Subject"
                  variant="outlined"
                  margin="normal"
                  name="Subject"
                  onChange={(event) => setSubject(event.target.value)}
                />
              </div>
              <div className="Message-box">
                <TextField
                  className="Contact-boxes"
                  id="Message-box"
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  name="message"
                  type={"text"}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
            </div>
            <div className="Send-button">
              <Button
                sx={{ color: "white" }}
                onClick={() => {
                  emailjs.send(
                    "service_vyzxyzp",
                    "template_ev8q18i",
                    {
                      name: userName,
                      to_name: "Ansh",
                      message: mssg,
                      user_email: userEmail,
                      Subject: sub,
                    },
                    "5Z_eSsMNmETzCY3aX"
                  );
                  alert("message sent");
                  window.location.reload();
                }}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
