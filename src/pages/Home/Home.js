// src/pages/Home/Home.js
import React from 'react';
import styled from 'styled-components';
import HeroSection from '../../components/HeroSection';
import SecondarySection from '../../components/SecondarySection';
import EventSection from '../../components/Constant/EventSection';
import FooterComponent from '../../components/FooterComponent';
import Line from '../../components/Line';
import Lead from '../../components/Lead';
import ButtonSection from '../../components/ButtonSection';
import { ResumeIcon } from '../../components/Constant/SvgIcon';
import MessageCard from '../../components/MessageCard';

const Home = () => {
  return (
    <Background>
      <Container>
        <HeroSection />
        <MessageCard /> {/* <SecondarySection /> */}
        <Line />
        {/* <EventSection /> */}
        <div className="ContentWrapper">
          <h4>Checkout my Apps on the App Store:</h4>
          <Lead leadText="EzRhymes | The Ultimate App to Elevate Your Rhymes" link="https://apps.apple.com/il/app/ezrhymes/id1639486303" />
          <Lead leadText="Connect X | Connect Four Reimagined" link="https://apps.apple.com/il/app/connect-x/id6670289202?platform=iphone" />
        </div>
        <Line className="line" />
        <ButtonSection className="handIcon" BtnIcon={<ResumeIcon />} BtnText="Resume" />
        <Line />
        <FooterComponent />
      </Container>
    </Background>
  );
};

export default Home;

const Background = styled.div`
  background-color: #eef2f5;
`;

const Container = styled.div`
  display: flex;
  height: auto;
  max-width: 620px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  .ContentWrapper {
    width: 100%;
    h4 {
      font-size: 18px;
      font-weight: 600;
      text-align: left;
      margin-bottom: 1em;
      font-family: "Inter", sans-serif;
    }
  }

  .handIcon {
    background-color: #783ff3;
    color: white;
    width: 100%;
    margin-top: 2em;
  }

  .line {
    margin-top: -7px;
  }

  @media (max-width: 768px) {
    .ContentWrapper {
      width: 100%;
      h4 {
        text-align: center;
      }
    }
  }
`;
