import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>&nbsp;/ {title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 10rem;
  ${"" /* background-color: ${({ theme }) => theme.colors.bg}; */}
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 2.2rem;
  }
`;

export default PageNavigation;
