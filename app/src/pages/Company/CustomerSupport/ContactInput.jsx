import React, { useState } from "react";
import "./customer_support.css";

const ContactInput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [supportType, setSupportType] = useState("--- Select ---");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || supportType === "--- Select ---") {
      alert("Please fill in all the required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    window.location.reload();
  };

  return (
    <>
      <div
        id="first-name-form"
        className="w-full lg:w-[48%] flex flex-col mt-5 lg:mt-0"
      >
        <label className="text-white" htmlFor="first-name">
          First Name
        </label>
        <input
          className="name-input"
          name="first-name"
          placeholder=" John"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </div>
      <div
        id="last-name-form"
        className="w-full lg:w-[48%] flex flex-col mt-5 lg:mt-0"
      >
        <label className="text-white" htmlFor="last-name">
          Last Name
        </label>
        <input
          className="name-input"
          name="last-name"
          placeholder=" Doe"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
      </div>
      <div id="email-form" className="w-full flex flex-col mt-5">
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          className="w-full rounded-xl h-10"
          name="email"
          placeholder=" John@Doe.com"
          value={email}
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div id="support-type-form" className="w-full flex flex-col mt-5">
        <label className="text-white" htmlFor="supportType">
          Support Type
        </label>
        <select
          className="w-full rounded-xl h-10"
          name="supportType"
          id="supportType"
          value={supportType}
          onChange={(event) => setSupportType(event.target.value)}
          required
        >
          <option>--- Select ---</option>
          <option>Scheduling, Rescheduling, Cancellations</option>
          <option>Pricing, Refunds, Payments</option>
          <option>Legal, Judiciary</option>
          <option>General Questions</option>
          <option>Complaints</option>
          <option>Other</option>
        </select>
      </div>
      <div id="message-form" className="w-full mt-5">
        <label htmlFor="message" className="text-white">
          Message
        </label>
        <textarea
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          className="w-full rounded-md h-32 resize-none"
          name="message"
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default ContactInput;
