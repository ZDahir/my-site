/** @format */

import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import ParaText from "./ParaText";
import SendButton from "./Constant/SendButton";

const MessageCard = () => {
  return (
    <CardContainer>
      <Heading className="heading">
        LeadLeadLeadMy Technologies & Frameworks:
      </Heading>
      <ParaText className="paraText">
        LLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLead
      </ParaText>
      <SendButton className="sendBtn" />
    </CardContainer>
  );
};

export default MessageCard;
const CardContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  margin: auto;
  background-color: black;
  min-height: 162px;
  border-radius: 32px;
  padding: 24px;
  @media (max-width: 600px) {
    // width: 90%;
  }
  .heading {
    color: white;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }
  .paraText {
    color: white;
    letter-spacing: -0.3px;
    font-family: Inter, sans-serif;
    font-size: 16px;
    line-height: 150%;
    @media (max-width: 600px) {
      max-width: 320px;
      padding: 0;
    }
  }
  .sendBtn {
    color: white;
    margin-top: 45px;
    display: inline-block;
  }
`;