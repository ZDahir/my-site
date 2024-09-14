import React from "react";
import styled from "styled-components";
const FooterComponent = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <FooterContainer>
      <FooterText>
        &copy; {currentYear} by Zaid Dahir. All Rights Reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default FooterComponent;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  margin-top: 2em;
`;

const FooterText = styled.p`
  color: #070707;
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 400;
`;