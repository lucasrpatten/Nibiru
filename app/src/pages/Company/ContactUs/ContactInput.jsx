import React, { useState } from "react";
import "./contact_us.css";

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

  const input = "block rounded-xl px-2.5 pb-1.5 pt-4 w-full text-sm text-white bg-gray border-2 border-white focus:outline-none focus:ring-0 focus:border-teal peer"
  const nameDiv = "relative w-full lg:w-1/2 flex flex-col mt-5 lg:mt-0"
  return (
    <>
      <div className="bg-gray w-full p-10 rounded-xl">
        <div className="md:flex gap-5">
        <div 
        id="first-name-form"
        class={nameDiv}
        >
          <input 
          type="text" 
          className={input} 
          name="first-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder=" " 
          required
          />
          <label class="label" htmlFor="first-name">First Name</label>
        </div>
          <div
            id="last-name-form"
            class={nameDiv}
          >
            <input
              className={input} 
              name="last-name"
              placeholder= " "
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
            <label class="label" htmlFor="last-name">
              Last Name
            </label>
          </div>
        </div>
        <div id="email-form" className="relative w-full flex flex-col mt-5">
          <input
            className={input}
            name="email"
            placeholder=" "
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label class="label" htmlFor="email">
            Email
          </label>
        </div>
        <div id="support-type-form" className="w-full flex flex-col mt-5">
          <label className="text-white mb-2" htmlFor="supportType">
            Support Type
          </label>
          <select
            className="w-full rounded-xl h-10 bg-gray text-white border-2 border-white"
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
      </div>
    </>
  );
};

export default ContactInput;
