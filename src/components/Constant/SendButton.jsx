import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link

const SendButton = ({ className }) => {
  return (
    <StyledLink to="/book" className={className}>
      Book a time to chat
    </StyledLink>
  );
};

export default SendButton;

// Styled Link component
const StyledLink = styled(Link)`
  background: none;
  border: none;
  margin-top: 2em;
  word-spacing: 1px;
  text-decoration: underline;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 0;
  color: #000000;
`;

