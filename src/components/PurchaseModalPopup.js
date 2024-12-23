import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { useCartContext } from "../context/cart_context";

const PurchaseModalPopup = ({ isOpen, onClose, totalAmount }) => {
  const navigate = useNavigate();
  const { clearCart } = useCartContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userDetails", JSON.stringify(formData));

    initiateRazorpayPayment();
  };

  const initiateRazorpayPayment = () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: totalAmount,
      currency: "INR",
      name: "THE STORE",
      description: "Enjoy Shopping!!",
      handler: function (response) {
        localStorage.setItem("paymentId", response.razorpay_payment_id);
        // localStorage.setItem("orderId", response.razorpay_order_id);
        // localStorage.setItem("signature", response.razorpay_signature);

        clearCart();

        navigate("/thank-you");

        // alert(
        //   `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        // );
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobile,
      },
      notes: {
        address: formData.address,
      },
      theme: {
        color: "#bb90db",
      },
      modal: {
        ondismiss: function () {
          alert("Payment process interrupted. Please try again.");
        },
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      // console.error("Payment failed:", response.error.description);
      alert(`Payment failed! Reason: ${response.error.description}`);
    });

    rzp1.open();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Enter Your Details</h2>
        <p>
          Total Amount : <FormatPrice price={totalAmount} />
        </p>
        <form onSubmit={handleFormSubmit}>
          <InputWrapper>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="mobile">Mobile*</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="address">Address*</label>
            <textarea
              id="address"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </InputWrapper>

          <SubmitButton type="submit">Checkout Payment</SubmitButton>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 4rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
    color: #bb90db;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    opacity: 0.6;
  }

  input,
  textarea {
    padding: 0.8rem;
    font-size: 1.4rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.helper};
    }
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 3rem;
  cursor: pointer;
  transition: background-color 0.3s;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover {
    transform: scale(1.26);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  margin-top: 2rem;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.btn};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover {
    ${"" /* box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%); */}
    background-color: ${({ theme }) => theme.colors.btnHover};
    transform: scale(0.96);
  }
`;

export default PurchaseModalPopup;
