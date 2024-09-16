import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import ProfileImage from "./ProfileImage";
import Heading from "./Heading";
import IconSection from "./IconSection";
import ButtonSection from "./ButtonSection";
import CardSection from "./CardSection";
import { ChromeIcon, ResumeIcon } from "./Constant/SvgIcon";
import styled from "styled-components";
import { downloadVCard } from "../utils/vCardUtils"; // Import the downloadVCard function

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <>
      <ProfileImage src="/images/profile.png" alt="Profile Picture" />
      <Heading>Zaid Dahir</Heading>
      <Text>
        Chapter Lead @ BlackBoysCode | NSBE East Canada Vice Chair | Prev SWE Intern @ TD Bank | CS @ York University
      </Text>
      <IconSection />
      <BtnContainer>
        {/* Save Contact Button */}
        <ButtonSection BtnIcon={<ChromeIcon />} BtnText="Save Contact" onClick={downloadVCard} />

        {/* Resume Button */}
        <ButtonSection 
          className="resume" 
          BtnIcon={<ResumeIcon />} 
          BtnText="Resume" 
          onClick={() => navigate('/resume')} 
        />

        {/* Portfolio Button - Redirect to an external URL */}
        <ButtonSection 
          BtnIcon={<ChromeIcon />} 
          BtnText="My Portfolio" 
          url="https://your-portfolio-website.com" 
        />
      </BtnContainer>
      <CardSection />
    </>
  );
};

export default HeroSection;

const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  .resume {
    background-color: #783ff3;
    color: white;
  }
`;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  color: rgb(72, 72, 72);
  max-width: 464px;
  letter-spacing: -0.3px;
  font-size: 16px;
  text-align: center;
  line-height: 150%;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;
