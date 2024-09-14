/** @format */

import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import ParaText from "./ParaText";
import SendButton from "./Constant/SendButton";

const BlackCard = () => {
  return (
    <CardContainer>
      <Heading className='heading'>
        LeadLeadLeadMy Technologies & Frameworks:
      </Heading>
      <ParaText className='paraText'>
        LLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLeadLead
      </ParaText>
      <SendButton className='sendBtn' />
    </CardContainer>
  );
};

export default BlackCard;
const CardContainer = styled.div`
  margin: auto;
  background-color: black;
  width: 566px;
  height: 162px;
  border-radius: 32px;
  padding: 10px 20px;
  .heading {
    color: white;
    font-size: 18px;
  }
  .paraText {
    color: white;
    margin-top: -0.5em;
  }
  .sendBtn {
    color: white;
  }
`;