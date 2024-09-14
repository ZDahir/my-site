/** @format */

import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import SecondarySection from "./components/SecondarySection";
import EventSection from "./components/Constant/EventSection";
import FooterComponent from "./components/FooterComponent";
import Line from "./components/Line";
import Lead from "./components/Lead";
import ButtonSection from "./components/ButtonSection";
import { ResumeIcon } from "./components/Constant/SvgIcon";

function App() {
  return (
    <Background>
      <Container>
        <HeroSection />
        <SecondarySection />
        <EventSection />
        <Line />
        <div className="ContentWrapper">
          <h4>My Apps on the App Store:</h4>
          <Lead leadText="LeadLeadLeadLeadLeadLeadLead" />
          <Lead leadText="LeadLeadLeadLeadC" />
          <Lead leadText="LeadLeadLead" />
        </div>
        <Line className="line" />
        <ButtonSection
          className="handIcon"
          BtnIcon={<ResumeIcon />}
          BtnText="Resume"
        />
        <Line />
        <FooterComponent />
      </Container>
    </Background>
  );
}

export default App;
const Background = styled.div`
  background-color: #eef2f5;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  height: auto;
  max-width: 600px;
  margin: auto;
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
`;