import React, { useState } from "react";

import axios from "axios";

function Subscribe() {
  /*const { subscribe, status, error, value } = useMailChimp(
    process.env.NEXT_PUBLIC_MAILCHIMP
  );

  //States
  const [state, setState] = React.useState({
    loading: "",
    error: "",
    success: "",
  });

  const [message, setMessage] = React.useState(null);

  const [email, setEmail] = React.useState("");
  function handleSubmit(e) {
    console.log(1);
    e.preventDefault();

    if (email) {
      subscribe({
        EMAIL: email,
      });

      console.log(status);

      if (status === Status.loading) {
        setMessage("Subscribing...");
      } else if (status === Status.error) {
        setMessage("An error occurred. Please try again later.");
      } else if (status === Status.success) {
        setMessage("Thank you for subscribing!");
        // Clear email input after success
        setEmail("");
        // Hide success message after a few seconds
        setTimeout(() => {
          setMessage(null);
        }, 5000); // Adjust the duration as needed
      }
    }
  }

  React.useEffect(() => {}, []);

  function handleEmail(e) {
    setEmail(e.target.value);
  }*/

  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e) => {
    e.preventDefault();

    setState("Loading");

    try {
      const response = await axios.post("/api/subscribe", { email });
      console.log(response);
      setState("Success");
      setEmail("");
    } catch (e) {
      setErrorMsg(e.response.data.error);
      setState("Error");
    }
  };

  return (
    <section className="news">
      <div className="news-wrapper">
        <div
          className="news-header"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1>GET UPDATES ON DISCOUNTS, EVENTS & SPECIAL OFFERS</h1>
          <p>Sign up to Our Newsletter</p>
        </div>
        <div
          className="form-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <form className="form" action="">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email Address"
            />
            <button className="news-btn" onClick={subscribe}>
              <i class="ri-arrow-right-line"></i>
            </button>
          </form>
        </div>

        <div className="message">
          {state === "Error" && (
            // <ErrorState className="error-state">{errorMsg}</ErrorState>
            <p>{errorMsg}</p>
          )}
          {state === "Success" && (
            // <SuccessState>Awesome, you've been subscribed!</SuccessState>
            <p>Awesome, you&apos;ve been subscribed!</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
