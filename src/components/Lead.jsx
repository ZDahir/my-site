/** @format */

import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { LeadIcon } from "./Constant/SvgIcon";

const Lead = ({ leadText, link }) => {
  return (
    <LeadCard href={link} target="_blank" rel="noopener noreferrer">
      <Heading className='subHeading'>{leadText}</Heading>
      <div>
        <LeadIcon />
      </div>
    </LeadCard>
  );
};

export default Lead;

const LeadCard = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  margin: 0.6em 0;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  .subHeading {
    font-size: 16px;
    margin: 0;
    line-height: 1;
  }

  div {
    display: flex;
    align-items: center;
  }
`;
