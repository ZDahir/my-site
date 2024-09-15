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
    <>
      <EventsContainer>
        <Heading className="eventsTitle">Upcoming events</Heading>
        <div className="ImageWrapper">
          {/* <img src="/images/Events.jpeg" alt="Events" className="eventsImage" /> */}
          <div className="dateContainer">
            <Heading className="dateHeading">24</Heading>
            <ParaText className="datePara">August</ParaText>
          </div>
          <div className="eventsContent">
            <Heading className="dateHeading">Name of your event</Heading>
            <ParaText className="eventsPara">
              Here is a breakdown of what I think beginners should focus on when
              learning design
            </ParaText>
          </div>
          <ButtonSection
            BtnIcon={<RegisterIcon />}
            BtnText="Free to register"
            className="registerBtn"
          />
        </div>
      </EventsContainer>
      <Calender />
    </>
  );
};

export default EventSection;
const EventsContainer = styled.div`
  max-width: 100%;
  color: var(--white);
  width: 100%;
  .eventsTitle {
    margin: 1em 0 1.5em;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }
  .ImageWrapper {
    position: relative;
    height: 350px;
    background-image: url("./images/Events.jpg");
    background-position: center; /* Center the background image */
    background-repeat: no-repeat;
    background-size: cover; /* Ensure the image covers the div without squeezing */
    border-radius: 32px;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
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
    background-color: #783ff3;
    padding: 16px;
  }
  .dateHeading {
    color: white;
    margin: 0;
  }
  .datePara {
    color: white;
  }
  .eventsContent {
    margin-top: 27%;
  }
  .eventsPara {
    color: white;
    max-width: 340px;
    opacity: 0.6;
    margin-top: 0.5em;
    line-height: 24px;
    margin-bottom: 1em;
  }
  .registerBtn {
    background-color: #783ff3;
    color: white;
    position: unset;
  }
  @media (max-width: 768px) {
    .eventsTitle {
      text-align: center;
    }
    .datePara {
      color: white;
      padding: 0px !important;
    }
    .eventsContent {
      margin-top: 25%;
      p {
        padding: 0 0 1.3em;
      }
    }
  }
`;
