import React from "react";
import styled from "styled-components";

const PrivacyPolicy = () => {
  return (
    <Container>
      <h1>Privacy Policy</h1>
      <p>Last updated: 13/10/2024</p>
      <h2>Introduction</h2>
      <p>
        Welcome to THE STORE! We are committed to protecting your personal
        information and your right to privacy. If you have any questions or
        concerns about this privacy notice, or our practices regarding your
        personal information, please contact us.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect personal information that you provide to us when you
        create an account, place an order, or communicate with us. This may
        include your name, email address, phone number, shipping address, and
        payment information.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect to:
        <ul>
          <li>Process and manage your orders</li>
          <li>Communicate with you about your orders</li>
          <li>Improve our services and customer experience</li>
          <li>Send you marketing communications (if opted in)</li>
        </ul>
      </p>
      <h2>Sharing Your Information</h2>
      <p>
        We do not sell your personal information to third parties. We may share
        your information with third-party service providers to assist in
        processing your orders and providing our services.
      </p>
      <h2>Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal
        information. If you wish to exercise these rights, please contact us.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this privacy policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this privacy policy, please contact us
        at:
      </p>
      <p>kumaramansingh137@gmail.com</p>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2rem;
    margin-top: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  ul {
    margin: 10px 0;
    padding-left: 20px;
  }
`;

export default PrivacyPolicy;
