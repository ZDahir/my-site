/** @format */

import React from "react";
import styled from "styled-components";
const Calender = () => {
  return (
    <EventSection>
      <LeftSection>
        <EventImage src="/images/eventImage.png" alt="Event" />
        <EventDetails>
          <EventName>Name of your event</EventName>
          <EventDate>
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2h-3.6a1.4 1.4 0 01-1.4-1.4V3.6a1.4 1.4 0 00-1.4-1.4h-3.6A1.4 1.4 0 008 3.6V5a1.4 1.4 0 01-1.4 1.4H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </Icon>
            August 24, 2020, 8:00AM GMT0
          </EventDate>
        </EventDetails>
      </LeftSection>
      <FreeTag>
        <TicketIcon>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5245 7.52633C14.4342 7.61406 14.3117 7.66413 14.1828 7.66413C13.7057 7.66413 13.3188 8.03999 13.3188 8.49719C13.3188 8.95753 13.7011 9.33146 14.1737 9.33653C14.44 9.33899 14.6663 9.51939 14.6663 9.77806V11.3847C14.6663 12.7369 13.538 13.8337 12.1454 13.8337H10.0435C9.82621 13.8337 9.65021 13.6627 9.65021 13.4516V12.0987C9.65021 11.8356 9.43747 11.6289 9.16667 11.6289C8.90234 11.6289 8.68307 11.8356 8.68307 12.0987V13.4516C8.68307 13.6627 8.50707 13.8337 8.29047 13.8337H3.85396C2.46776 13.8337 1.33301 12.7375 1.33301 11.3847V9.77806C1.33301 9.51939 1.55931 9.33899 1.82559 9.33653C2.29883 9.33146 2.68053 8.95753 2.68053 8.49719C2.68053 8.05246 2.30657 7.71426 1.81657 7.71426C1.68761 7.71426 1.56511 7.66413 1.47485 7.57646C1.38459 7.48879 1.33301 7.36979 1.33301 7.24453V5.62227C1.33301 4.27187 2.47034 3.16699 3.86041 3.16699H8.29047C8.50707 3.16699 8.68307 3.33799 8.68307 3.54907V5.15251C8.68307 5.40931 8.90234 5.62227 9.16667 5.62227C9.43747 5.62227 9.65021 5.40931 9.65021 5.15251V3.54907C9.65021 3.33799 9.82621 3.16699 10.0435 3.16699H12.1454C13.538 3.16699 14.6663 4.2631 14.6663 5.61601V7.19439C14.6663 7.31966 14.6147 7.43866 14.5245 7.52633ZM9.16667 10.4138C9.43747 10.4138 9.65021 10.2009 9.65021 9.94406V7.43866C9.65021 7.18186 9.43747 6.96891 9.16667 6.96891C8.90234 6.96891 8.68307 7.18186 8.68307 7.43866V9.94406C8.68307 10.2009 8.90234 10.4138 9.16667 10.4138Z"
              fill="#070707"
            ></path>
          </svg>
        </TicketIcon>
        Free
      </FreeTag>
    </EventSection>
  );
};

export default Calender;

const EventSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: #ffe4e6;
  border-radius: 32px;
  width: 100%;
  margin-top: 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const EventImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
`;

const EventDetails = styled.div`
  margin-left: 16px;
`;

const EventName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
`;

const EventDate = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  margin: 4px 0 0 0;
`;

const Icon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const FreeTag = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 16px;
  padding: 10px 22px;
  font-weight: 600;
`;

const TicketIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 4em;
  margin-right: 8px;
`;