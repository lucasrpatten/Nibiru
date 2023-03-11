import React from "react";
import FaqBanner from "./FaqBanner";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FAQ = () => {
  return (
    <>
      <div>
        <FaqBanner
          question="Q: What are the requirements to participate in a commercial space travel program?"
          answer="A: The requirements may vary depending on the specific program, but in general, participants must be at least 18 years old and meet certain physical and medical requirements. They may also need to undergo extensive training and pass medical screenings before the flight."
        />
        <FaqBanner
          question="Q: How much does it cost to travel to space with your company?"
          answer="A: The cost of space travel varies depending on the program and the type of flight, but it can range from several thousand to hundreds of thousands of dollars per person. However, we offer various payment plans and financing options to make it more accessible to a wider range of customers."
        />
        <FaqBanner
          question="Q: What safety measures are in place for commercial space travel?"
          answer="A: Safety is our top priority, and we have extensive safety protocols and procedures in place to ensure the well-being of our passengers and crew. Our space vehicles undergo rigorous testing and certification processes, and our crew members are highly trained and experienced in handling emergencies."
        />
        <FaqBanner
          question="Q: What is the duration of a typical space flight with your company?"
          answer="A: The duration of a space flight can vary depending on the program, but it typically ranges from a few minutes to several days. Our suborbital flights, for example, last approximately 15 minutes, while our orbital flights can last several days."
        />
        <FaqBanner
          question="Q: How far in advance do I need to book my space flight?"
          answer="A: We recommend booking your space flight as far in advance as possible to ensure availability and to allow time for any necessary preparations, such as medical screenings and training. However, we also offer last-minute bookings for some programs, subject to availability."
        />
      </div>
    </>
  );
};

export default FAQ;
