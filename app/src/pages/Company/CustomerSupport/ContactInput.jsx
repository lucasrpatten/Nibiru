import React, { useState } from "react";

const ContactInput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
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
    // Submit the form data to the server here
    alert("Form submitted successfully!");
  };

  return (
    <>
      <div className="w-full lg:w-[48%] flex flex-col">
        <label className="text-white" htmlFor="first-name">
          First Name
        </label>
        <input
          className="w-100%"
          name="first-name"
          placeholder="John"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </div>
      <div className="w-full lg:w-[48%] flex flex-col">
        <label className="text-white" htmlFor="last-name">
          Last Name
        </label>
        <input
          className="w-100%"
          name="last-name"
          placeholder="Doe"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-col">
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          className="w-100%"
          name="email"
          placeholder="Email"
          value={email}
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-col">
        <label className="text-white" htmlFor="supportType">
          Support Type
        </label>
        <select
          className="w-100%"
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
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default ContactInput;
