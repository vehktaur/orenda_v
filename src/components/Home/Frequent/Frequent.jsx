import { useState } from "react";
import "./Frequent.css";
import QA from "./Question";
import callpurple from "../../../assets/callpurple.png";
import mailpurple from "../../../assets/mailpurple.png";

const Frequent = () => {
    const [faqs, setFaqs] = useState([
        {
          question: "How soon can i schedule an appointment?",
          answer:
            "You can schedule an appointment even within 24 hours. Please note that appointment availability varies based on demand, but we do our best to accommodate your scheduling needs as quickly as possible.",
          open: false,
        },
        {
          question: "Do you accept my insurance?",
          answer:
            "Yes, we accept most major insurance plans. Please contact our office to verify your insurance coverage.",
          open: false,
        },
        {
          question: "What qualifications does your provider have?",
          answer:
            "Our providers are licensed, board-certified Psychiatric & Mental Health Nurse Practitioners with advanced degrees in psychology, counseling, and Nursing. They have extensive experience and training in various therapeutic modalities to address a wide range of mental health concerns.",
          open: false,
        },
        {
          question: "What types of therapy do you offer?",
          answer:
            "We offer a range of evidence-based therapies, including dialectical behavior therapy (DBT), mindfulness-based approaches, and more. Your therapist will work with you to determine the most suitable treatment approach for your needs.",
          open: false,
        },
        {
          question: "How do you ensure confidentiality?",
          answer:
            "Protecting your privacy is a top priority. Our therapists adhere to strict confidentiality guidelines, and your personal information will be kept secure in accordance with legal and ethical standards.",
          open: false,
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "We require 24-hour notice for appointment cancellations or rescheduling. Missed appointments or late cancellations are subject to a fee.",
          open: false,
        },
        {
          question: "Can your providers prescribe medication?",
          answer:
            "Yes, our providers prescribe medication. We also have a team of Registered Nurses licensed to support your medication management in partnership with your provider. Please note that your provider is not obligated to send a particular prescription or dosage if they do not infer that it is safe for you to take that medication, based on your assessment.",
          open: false,
        },
        {
          question: "What qualifications does your provider have?",
          answer:
            "Our providers are licensed, board-certified Psychiatric & Mental Health Nurse Practitioners with advanced degrees in psychology, counseling, and Nursing. They have extensive experience and training in various therapeutic modalities to address a wide range of mental health concerns.",
          open: false,
        },
      ]);
    
      const toggleFAQ = (index) => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
      };
    
      return (
        <div className="Frequently">
          <h1>Frequently Asked Questions</h1>
          <div className="faqs">
            {faqs.map((faq, index) => (
              <QA faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
          <p>Can’t find your question?</p>
          <div className="freq-text">
            <div className="freq-prop">
              <p>
                <img src={mailpurple} alt="" /> Send a message
              </p>
            </div>
            <p>or</p>
            <div className="freq-prop">
              <p>
                <img src={callpurple} alt="" />
                Call to ask
              </p>
            </div>
          </div>
        </div>
      );
}

export default Frequent