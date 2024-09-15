/** @format */
import React from "react";
import styled from "styled-components";

const ParaText = ({ children, className }) => {
  return <Text className={className}>{children}</Text>;
};

export default ParaText;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  color: rgb(72, 72, 72);
  max-width: 464px;
  letter-spacing: -0.3px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 150%;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;