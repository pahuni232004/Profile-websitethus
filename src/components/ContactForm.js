import React, { useState, useRef } from "react";
import "./ContactFormStyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cartoon from "../images/Untitled design (12).png";

export default function ContactForm({ id }) {
  const form = useRef();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendEmail = () => {
    const mailtoLink = `mailto:pahu567@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-window" id={id}>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      <div className="contact-container">
        <img
          src={cartoon}
          alt="Deepa Jha"
          className="contact-wrapper-left"
        ></img>
        <form ref={form}  className="contact-wrapper-right">
          <input
            id="name"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email ID"
            required
          />
          <textarea
            id="message"
            name="message"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="5"
            column="15"
            placeholder="Share your thoughts and insights here; your feedback means a lot."
            required
          />
          <button
            className="btn"
            id="submitBtn"
            onClick={handleSendEmail}
            type="submit"
            value="Send"
          >
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
