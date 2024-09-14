/** @format */

import React from "react";
import ParaText from "../ParaText";
import styled from "styled-components";
import Heading from "../Heading";
import ButtonSection from "../ButtonSection";
import { RegisterIcon } from "./SvgIcon";
import Calender from "../Calender";

const EventSection = () => {
  return (
    <EventsContainer>
      <Heading className='eventsTitle'>Upcoming events</Heading>
      <div className='ImageWrapper'>
        <img
          src='/images/Events.jpg'
          alt='Events'
          className='eventsImage'
        />
        <div className='dateContainer'>
          <Heading className='dateHeading'>24</Heading>
          <ParaText className='datePara'>August</ParaText>
        </div>
        <div className='eventsContent'>
          <Heading className='dateHeading'>Name of your event</Heading>
          <ParaText className='eventsPara'>
            Here is a breakdown of what I think beginners should focus on when
            learning design
          </ParaText>
          <ButtonSection
            BtnIcon={<RegisterIcon />}
            BtnText='Free to register'
            className='registerBtn'
          />
        </div>
      </div>
      <Calender />
    </EventsContainer>
  );
};

export default EventSection;
const EventsContainer = styled.div`
  width: 566px;
  .eventsTitle {
    font-size: 16px;
    margin-top: 30px;
  }
  .ImageWrapper {
    position: relative;
  }
  .eventsImage {
    border-radius: 32px;
  }
  .dateContainer {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
  }
  .dateHeading {
    color: white;
    margin: 0;
  }
  .datePara {
    color: white;
  }
  .eventsContent {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
  .eventsPara {
    color: white;
    opacity: 0.6;
    margin-top: 0.5em;
    line-height: 24px;
    margin-bottom: 1em;
  }
  .registerBtn {
    background-color: #783ff3;
    color: white;
  }
`;