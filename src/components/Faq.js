import React, { useState } from "react";
import styled from "styled-components";

const faqs = [
  {
    question: "What types of products do you offer?",
    answer:
      "We offer a wide range of products including electronics, clothing, home essentials, and more to meet all your shopping needs.",
  },
  {
    question: "Do you provide international shipping?",
    answer:
      "Yes, we provide international shipping! Check our shipping policy for more details on delivery times and costs.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return any product within 30 days of receipt, provided it is in its original condition.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order has been shipped, you'll receive a tracking number via email to monitor your shipment.",
  },
  {
    question: "Do you offer discounts for bulk purchases?",
    answer:
      "Yes, we offer special discounts for bulk orders. Please contact our customer service for more details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and digital wallets for your convenience.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support via email or through our contact form on the website.",
  },
  {
    question: "Are the products on your site genuine?",
    answer:
      "Absolutely! We source our products from authorized distributors and manufacturers.",
  },
  {
    question: "Do you have a loyalty program?",
    answer:
      "Yes, we have a loyalty program that rewards you with points for every purchase.",
  },
  {
    question: "How do I create an account?",
    answer:
      "You can create an account by clicking on the 'Sign Up' button on our homepage and filling out the required information.",
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Container>
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => handleToggle(index)}>
            {faq.question}
            <ToggleIcon>{expandedIndex === index ? "-" : "+"}</ToggleIcon>
          </Question>
          {expandedIndex === index && <Answer>-{faq.answer}</Answer>}
        </FAQItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 0;
  padding: 0 12rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FAQItem = styled.div`
  background-color: #eaeaea;
  border-radius: 5px;
  font-size: 1.5rem;
  margin: 10px 0;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &:hover {
    box-shadow: 0 3px 8px #bb90db;
  }
`;

const Question = styled.div`
  padding: 15px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #fff;
  }
`;

const ToggleIcon = styled.span`
  font-size: 2.5rem;
  margin-left: 10px;
`;

const Answer = styled.div`
  padding: 15px;
  background-color: #fff;
  border-top: 1px solid #bb90db;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default FAQSection;
