import React from "react";
import Header from "@/components/Header";
import axios from "axios";
import { message } from "antd";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [messagev, setMessage] = React.useState("");
  const [error, setErrors] = React.useState({});
  const [valid, setValid] = React.useState(false);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleInputs(name, email, message) {
    let errors = {};
    let formValid = true;
    if (!email) {
      formValid = false;
      errors["email"] = "Invalid Email Address";
    }

    if (!name) {
      formValid = false;
      errors["name"] = "Name can not be empty";
    }

    if (!message) {
      formValid = false;
      errors["Message"] = "Invalid message ";
    }

    setErrors(errors);

    return formValid;
  }

  const setValuesDefault = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  async function sendMessage(e) {
    e.preventDefault();

    let errors = {};
    let formValid = true;
    if (!email || !email.includes("@")) {
      formValid = false;
      errors["email"] = "Invalid Email Address";
    }

    if (!name) {
      formValid = false;
      errors["name"] = "Name can not be empty";
    }

    if (!messagev) {
      formValid = false;
      errors["Message"] = "Invalid message ";
    }

    setErrors(errors);

    if (formValid) {
      try {
        const response = await axios.post("/api/message", {
          name,
          email,
          messagev,
        });

        if (response.data.success) {
          message.success(response.data.message);
          setValuesDefault();
        } else {
          setValuesDefault();
          message.error(response.data.message);
        }
      } catch (error) {
        setValuesDefault();
        message.error("An Error Occured");
        return;
      }
    } else {
      message.error("Please enter all fields correctly");
      console.log("Inputs must be filled");
      return;
    }
  }
  return (
    <>
      <Header text="Contact Us" />
      <div className="contact">
        <div className="contact-wrapper">
          <form action="">
            <div>
              <label htmlFor="email"> Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email Address"
                onChange={handleEmail}
              />
              <p className="error">{error["email"]}</p>
            </div>
            <div>
              <label htmlFor="Full Name"> Full Name</label>
              <input
                value={name}
                type="text"
                id="Full Name"
                name="Full Name"
                placeholder="Full Name"
                onChange={handleName}
              />
              <p className="error">{error["name"]}</p>
            </div>
            <div>
              <label htmlFor="Full Name"> Have a message?</label>
              <textarea
                value={messagev}
                name="textarea"
                id=""
                cols="30"
                placeholder="Send a message"
                rows="10"
                onChange={handleMessage}
              ></textarea>
              <p className="error">{error["Message"]}</p>
            </div>
            <button onClick={sendMessage} className="message-cta">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
