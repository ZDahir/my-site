/** @format */
import React from "react";
import styled from "styled-components";

const Heading = ({ children, className }) => {
  return <StyledHeading className={className}>{children}</StyledHeading>;
};

export default Heading;

const StyledHeading = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  margin: 20px 0;
`;