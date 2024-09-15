/** @format */
import React from "react";
import styled from "styled-components";
import {
  CalendarIcon,
  ChromeIcon,
  InstagramIcon,
  LinkedinIcon,
  SpotifyIcon,
  TwitterIcon,
} from "./Constant/SvgIcon";

const IconSection = () => {
  return (
    <IconContainer>
      <IconWrapper>
      <LinkedinIcon url="https://linkedin.com/in/zaiddahir" />
      </IconWrapper>
      <IconWrapper>
        <TwitterIcon url="https://x.com/zaidmdahir"/>
      </IconWrapper>
      <IconWrapper>
        <InstagramIcon url="https://www.instagram.com/zaiddahir/"/>
      </IconWrapper>
      <IconWrapper>
        <SpotifyIcon url ="https://open.spotify.com/user/21rx57rdnwgnoj62wnuuz6bna?si=5b8bcce2f1a7406c" />
      </IconWrapper>
      <IconWrapper>
      <CalendarIcon url="/book" />
      </IconWrapper>
    </IconContainer>
  );
};

export default IconSection;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 24px 0;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff9;
  cursor: pointer;
  &:hover {
    background-color: #ffff;
  }
`;