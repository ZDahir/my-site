/** @format */
import React from "react";
import styled from "styled-components";
import {
  AndroidIcon,
  ChromeIcon,
  InstagramIcon,
  LinkedinIcon,
  NetlifyIcon,
  TwitterIcon,
} from "./Constant/SvgIcon";

const IconSection = () => {
  return (
    <IconContainer>
      <IconWrapper>
        <LinkedinIcon />
      </IconWrapper>
      <IconWrapper>
        <TwitterIcon />
      </IconWrapper>
      <IconWrapper>
        <InstagramIcon />
      </IconWrapper>
      <IconWrapper>
        <NetlifyIcon />
      </IconWrapper>
      <IconWrapper>
        <AndroidIcon />
      </IconWrapper>
    </IconContainer>
  );
};

export default IconSection;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;
`;