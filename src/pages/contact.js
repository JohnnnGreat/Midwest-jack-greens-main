import React, { useState } from "react";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";
import axios from "axios";
import { message } from "antd";
import Head from "next/head";

function Contact() {
  const [loading, setIsloading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      messagev: "",
    },

    mode: "onChange",
  });
  async function sendMessage(value) {
    setIsloading(true);
    try {
      const { name, messagev, email } = value;
      /*const response = await axios.post("/api/message", {
        name,
        email,
        messagev,
      });*/
      const response = await fetch("api/message", {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      // if (response.data.success) {
      //   console.log("sent");
      //   setIsloading(false);
      //   message.success(response.data.message);
      // } else {
      //   setIsloading(false);
      //   message.error(response.data.message);
      // }
      if (response.status === 500) {
        message.error("An error Occured");
        console.log(response);
        setIsloading(false);
      } else {
        message.success("Message Sents Successfully");
        console.log(response);
        setIsloading(false);
      }
    } catch (error) {
      // console.log(error);
      // setIsloading(false);
      // message.success("Message Sent");
      // return;

      console.log(err);
      message.error(err);
    }
  }
  return (
    <>
      <Head>
        <title>Contact Us | MidWest Jerk</title>
      </Head>
      <Header text="Contact Us" />
      <div className="contact">
        <div className="contact-wrapper">
          <form action="" onSubmit={handleSubmit(sendMessage)}>
            <div>
              <label htmlFor="email"> Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                // onChange={handleEmail}
                {...register("email", {
                  required: {
                    value: true,
                    message: " Enter a valid email address",
                  },
                })}
              />
              {errors.email?.message && (
                <p className="error-txt">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="Full Name"> Full Name</label>
              <input
                type="text"
                id="Full Name"
                name="Full Name"
                placeholder="Full Name"
                // onChange={handleName}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name can not be empty",
                  },
                })}
              />
              {errors.name?.message && (
                <p className="error-txt">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="message"> Have a message?</label>
              <textarea
                name="textarea"
                id="messagev"
                cols="30"
                placeholder="Send a message"
                rows="10"
                // onChange={handleMessage}
                {...register("messagev", {
                  required: {
                    value: true,
                    message: " Enter a valid message",
                  },
                })}
              ></textarea>
              {errors.messagev?.message && (
                <p className="error-txt">{errors.messagev.message}</p>
              )}
            </div>
            <button disabled={loading} className="message-cta">
              Send a message
              {loading && <div className="loader-cta"></div>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
