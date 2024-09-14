/** @format */
import React from "react";
import styled from "styled-components";
import ParaText from "./ParaText";
import Heading from "./Heading";
import SendButton from "./Constant/SendButton";

const CardSection = () => {
  return (
    <CardContainer>
      <CardWrapper bgImage="./images/dashboardBackground.jpg">
        <div className="card">
          <h1 className="cardHeading">500+</h1>
          <Heading className="cardSubHeading">LeadLeadLeadLead</Heading>
          <ParaText className="cardPara">
            LeadLeadLeadLeadLead aaedjeqkeqjkd
          </ParaText>
          <ParaText className="cardPara datePara">
            Last updated Jan 2, 2024
          </ParaText>
        </div>
      </CardWrapper>

      <div className="column">
        <CardWrapper bgImage="./images/secondCardBg.jpg">
          <div className="card secondCard">
            <Heading>LeadLeadLeadLead</Heading>
          </div>
        </CardWrapper>

        <CardWrapper bgImage="./images/thirdCardBg.jpg">
          <div className="card thirdCard">
            <Heading className="cardSubHeading thirdCardHeading">
              Hosting a Software Engineer Intern?
            </Heading>
            <ParaText className="cardPara">
              My provide exclusive influencer and model services.
            </ParaText>
            <SendButton />
          </div>
        </CardWrapper>
      </div>
    </CardContainer>
  );
};

export default CardSection;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 60px 0;
  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const CardWrapper = styled.div`
  .card {
    width: 270px;
    height: 316px;
    border-radius: 32px;
    background: ${(props) => `url(${props.bgImage}) no-repeat center center`};
    background-size: cover;
    padding: 60px 25px;

    .cardHeading {
      font-size: 54px;
      font-weight: 900;
      margin: 30px 0 0 0;
      font-family: "Inter", sans-serif;
      padding: 0;
    }

    .cardSubHeading {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 14px;
      word-spacing: -3px;
      padding: 0;
      margin: 0;
    }

    .cardPara {
      margin-top: 1rem;
      line-height: 20px;
      word-spacing: -3px;
    }
    .datePara {
      margin-top: 30px;
    }
  }

  .secondCard {
    height: 86px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .thirdCard {
    height: 210px;
    padding: 25px;
    .thirdCardHeading {
      font-size: 16px;
    }
  }
`;