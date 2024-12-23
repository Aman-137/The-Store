import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../thanku.json";

const ThankYou = () => {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={300} width={300} />
      <h1>Thank You for Your Purchase!</h1>
      <p>Your payment was successful.</p>
      <Button onClick={handleClick}>Go Back to Shopping</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  gap: 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    font-size: 1.8rem;
  }
`;

export default ThankYou;
