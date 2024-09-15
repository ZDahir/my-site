/** @format */
import React from "react";
import styled from "styled-components";

const Heading = ({ children, className }) => {
  return <StyledHeading className={className}>{children}</StyledHeading>;
};

export default Heading;

const StyledHeading = styled.h3`
  font-family: "Inter", sans-serif;
  letter-spacing: -0.3px;
  margin-top: 1em;
  margin-bottom: 0.3em;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;