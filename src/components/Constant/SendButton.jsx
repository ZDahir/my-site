/** @format */

import React from "react";
import styled from "styled-components";

const SendButton = ({ className }) => {
  return (
    <>
      <BtnContainer className={className}>Send me a message</BtnContainer>
    </>
  );
};

export default SendButton;
const BtnContainer = styled.button`
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
`;