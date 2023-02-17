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

  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  function handleTextChange(text) {
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

    function secondHandleTextChange(text) {
      if (text !== '') {
        setIsActive2(true);
      } else {
        setIsActive2(false);
      }
    }

  return (
    <>
      <div className="bg-gray w-full p-10 rounded-xl">
        <div className="flex gap-5">
          <div
            id="first-name-form"
            className="w-full lg:w-1/2 flex flex-col mt-5 lg:mt-0"
          >
            <label className={ isActive ? "Active" : "text-text absolute translate-x-3.5 translate-y-3.5 origin-top-left duration-200 uppercase font-bold tracking-wider"} htmlFor="first-name"
              First Name
            />
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
            className="w-full lg:w-1/2 flex flex-col mt-5 lg:mt-0"
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
            className="w-full rounded-md h-32 resize-none bg-gray border-2 border-white"
            name="message"
          />
        </div>
        <button className="rainbow-button" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default ContactInput;
