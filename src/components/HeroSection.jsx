/** @format */
/** @format */
import React from "react";
import ProfileImage from "./ProfileImage";
import Heading from "./Heading";
import ParaText from "./ParaText";
import IconSection from "./IconSection";
import ButtonSection from "./ButtonSection";
import CardSection from "./CardSection";
import { ChromeIcon, ResumeIcon } from "./Constant/SvgIcon";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <>
      <ProfileImage src="/images/profile.png" alt="profile" />
      <Heading>First Last</Heading>
      <ParaText>
        LeadLead @ LeadLeadLead | LeadLead @ Lead Lead Lead | Lead Lead Lead @
        Lead Lead | Lead Lead @ Lead Lead
      </ParaText>
      <IconSection />
      <BtnContainer>
        <ButtonSection BtnIcon={<ChromeIcon />} BtnText="Save Contact" />
        <ButtonSection
          className="resume"
          BtnIcon={<ResumeIcon />}
          BtnText="Resume"
        />
        <ButtonSection BtnIcon={<ChromeIcon />} BtnText="My Portfolio" />
      </BtnContainer>
      <CardSection />
    </>
  );
};

export default HeroSection;
const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  .resume {
    background-color: #783ff3;
    color: white;
  }
`;