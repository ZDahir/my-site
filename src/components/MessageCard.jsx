/** @format */

import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import ParaText from "./ParaText";
import SendButton from "./Constant/SendButton";

const MessageCard = () => {
  return (
    <CardContainer>
      <Heading className="message-card-heading">
        My Technologies & Frameworks:
      </Heading>
      <ParaText className="message-card-text">
        <p>
          <CategoryTitle>Languages:</CategoryTitle> Swift, Python, Java, JavaScript, TypeScript, HTML, CSS
        </p>
        <p>
          <CategoryTitle>Frameworks:</CategoryTitle> SwiftUI, UIKit, React, Angular, Node.js, Alamofire, Core Data, Realm, Firebase, Combine, SwiftData
        </p>
        <p>
          <CategoryTitle>Development Practices:</CategoryTitle> Agile, Test-Driven Development (TDD), Continuous Integration/Deployment (CI/CD)
        </p>
      </ParaText>
      <SendButton className="message-card-button" />
    </CardContainer>
  );
};

export default MessageCard;

const CardContainer = styled.div`
  flex: 1;
  width: 100%; /* Maintains the current width */
  max-width: 100%; /* Maintains the current max-width */
  overflow: hidden;
  margin: auto;
  margin-bottom: 3em;
  background-color: #000;
  min-height: 200px;
  border-radius: 32px;
  padding: 32px; /* Increased padding for more space inside the card */

  @media (max-width: 600px) {
    padding: 24px; /* Increased padding on mobile as well */
  }

  .message-card-heading {
    color: #fff;
    margin: 0 0 16px 0; /* Added bottom margin for spacing after heading */
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }

  .message-card-text {
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.3px;
    margin-top: 8px;

    p {
      margin: 16px 0; /* Adjusted spacing between paragraphs */
      white-space: normal;
    }

    @media (max-width: 600px) {
      max-width: 100%;
      padding: 0;
    }
  }

  .message-card-button {
    color: #fff;
    margin-top: 32px; /* Increased top margin for more space above the button */
    display: inline-block;
  }
`;

// Styled component for bold category titles
const CategoryTitle = styled.span`
  font-weight: bold;
  display: inline;
`;
