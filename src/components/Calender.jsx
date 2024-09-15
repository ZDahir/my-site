/** @format */

import React from "react";
import styled from "styled-components";
import { CalenderIcon, TicketIcon } from "./Constant/SvgIcon";
import ParaText from "./ParaText";
import ButtonSection, { CustomButton } from "./ButtonSection";
const Calender = () => {
  return (
    <EventSection>
      <LeftSection>
        <EventImage src="/images/eventImage.png" alt="Event" />
        <EventDetails>
          <ParaText className="calenderPara">Name of your event</ParaText>
          <ParaText className="eventDate">
            <Icon>
              <CalenderIcon />
            </Icon>
            August 24, 2020, 8:00AM GMT0
          </ParaText>
        </EventDetails>
      </LeftSection>
      <ButtonSection
        BtnIcon={<TicketIcon />}
        BtnText="Free"
        className="freeBtn"
      />
    </EventSection>
  );
};

export default Calender;

const EventSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 24px;
  background-color: #f4dfe2;
  border-radius: 32px;
  width: 100%;
  margin-top: 1.5em;
  .calenderPara {
    color: black;
    font-weight: 600;
    font-size: 18px;
  }
  .eventDate {
    color: black;
    margin-top: 0.5em;
  }
  .freeBtn {
    background: transparent;
    border: 1px solid;
  }
  @media (max-width: 768px) {
    justify-content: center;
    button {
      width: 100%;
      margin-top: 0.2em;
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    text-align: center;
    img {
      margin: auto;
    }
    display: block;
  }
`;

const EventImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
  @media (max-width: 768px) {
    margin: auto;
  }
`;

const EventDetails = styled.div`
  margin-left: 16px;
  @media (max-width: 768px) {
    text-align: center;
    p {
      padding: 0 !important;
      margin-bottom: 0.2em;
    }
  }
`;

const Icon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;