import React from "react";
import styled from "styled-components";

const TermsAndConditions = () => {
  return (
    <Container>
      <h1>Terms and Conditions</h1>
      <p>Last updated: 13/10/2024</p>
      <h2>Introduction</h2>
      <p>
        Welcome to THE STORE! These Terms and Conditions govern your use of our
        website and the purchase of our products. By accessing our site and
        purchasing our products, you agree to be bound by these terms.
      </p>
      <h2>Products</h2>
      <p>
        We strive to provide accurate descriptions of our products. However, we
        do not guarantee that all product descriptions are accurate, complete,
        or error-free.
      </p>
      <h2>Ordering and Payment</h2>
      <p>
        By placing an order, you agree to provide accurate and complete
        information. All payments must be made at the time of purchase.
      </p>
      <h2>Shipping and Delivery</h2>
      <p>
        We aim to ship your order within 0 to 7 days. Delivery times may vary
        depending on your location.
      </p>
      <h2>Returns and Refunds</h2>
      <p>
        We accept returns within 7 days of receipt. To be eligible for a return,
        the item must be unused and in its original packaging.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        THE STORE is not liable for any indirect, incidental, or consequential
        damages arising from your use of our products or services.
      </p>
      <h2>Changes to These Terms</h2>
      <p>
        We reserve the right to modify these terms at any time. Any changes will
        be posted on this page with an updated effective date.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms and Conditions, please
        contact us at:
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
`;

export default TermsAndConditions;
