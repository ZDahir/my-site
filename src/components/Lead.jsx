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
  align-items: center;
  max-width: 100%;
  padding: 10px 20px;
  background-color: white;
  border-radius: 16px;
  margin: 0.6em 0;
  .subHeading {
    font-size: 16px;
  }
`;