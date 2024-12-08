// src/pages/Home/Home.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import HeroSection from '../../components/HeroSection';
import FooterComponent from '../../components/FooterComponent';
import Line from '../../components/Line';
import Lead from '../../components/Lead';
import ButtonSection from '../../components/ButtonSection';
import { ResumeIcon } from '../../components/Constant/SvgIcon';
import MessageCard from '../../components/MessageCard';
import SecondarySection from '../../components/SecondarySection';

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <Background>
      <Container>
        <HeroSection />
        <SecondarySection/>
        <MessageCard />
        <div className="ContentWrapper">
          <h4>Checkout my Apps on the App Store:</h4>
          <Lead leadText="EzRhymes | Block Writer's Block" link="https://apps.apple.com/il/app/ezrhymes/id1639486303" />
          <Lead leadText="Connect X | Connect Four Reimagined" link="https://apps.apple.com/il/app/connect-x/id6670289202?platform=iphone" />
        </div>
        <ButtonSection className="handIcon" BtnIcon={<ResumeIcon />} BtnText="Resume" onClick={() => navigate('/resume')} />
        <Line />
        <FooterComponent />
      </Container>
    </Background>
  );
};

export default Home;

// Styled Components
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
