/** @format */

import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { LeadIcon } from "./Constant/SvgIcon";

const Lead = ({ leadText }) => {
  return (
    <LeadCard>
      <Heading className='subHeading'>{leadText}</Heading>
      <div>
        <LeadIcon />
      </div>
    </LeadCard>
  );
};

export default Lead;

const LeadCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Ensures vertical centering of children */
  max-width: 100%;
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  margin: 0.6em 0;

  .subHeading {
    font-size: 16px;
    margin: 0; /* Removes any default margin */
    line-height: 1; /* Adjusts line height to ensure better vertical alignment */
  }

  div {
    display: flex;
    align-items: center; /* Centers the LeadIcon vertically */
  }
`;
