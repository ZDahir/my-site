/** @format */
import React from "react";
import styled from "styled-components";
import ParaText from "./ParaText";
import Heading from "./Heading";
import SendButton from "./Constant/SendButton";

const CardSection = () => {
  return (
    <CardContainer>
      <CardWrapper className="responsiveCard">
        <UsersCard>
          <img src="/images/users.PNG" alt="" />
          <h1 className="cardHeading">500+</h1>
          <Heading className="cardSubHeading">LeadLeadLeadLead</Heading>
          <ParaText className="cardPara aboutText">
            LeadLeadLeadLeadLead aaedjeqkeqjkd
          </ParaText>
          <ParaText className="cardPara datePara">
            Last updated Jan 2, 2024
          </ParaText>
        </UsersCard>
      </CardWrapper>

      <div className="column">
        <CardWrapper>
          <div className="card secondCard">
            <Heading>LeadLeadLead</Heading>
          </div>
        </CardWrapper>

        <CardWrapper>
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
  gap: 20px;
  margin: 45px 0;
  @media (max-width: 600px) {
    flex-direction: column; /* Stack cards vertically on small screens */
    padding: 10px;
  }

  .column {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
  }
`;

const UsersCard = styled.div`
  width: 100%;
  height: auto;
  border-radius: 32px;
  background-image: url(./images/bg-image.svg);
  background-color: #94d7c5;
  background-size: 100%;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 600px) {
    align-items: flex-start;
  }
  img {
    width: 60px;
    height: 50px;
  }

  .cardHeading {
    font-size: 54px;
    font-weight: 900;
    margin: 10px 0 0 0;
    font-family: "Inter", sans-serif;
    padding: 0;
  }

  .cardSubHeading {
    font-weight: 700;
    letter-spacing: -0.3px;
    font-family: Inter, sans-serif;
    font-size: 16px;
    line-height: 150%;
    padding: 0;
    margin: 0;
  }

  .cardPara {
    margin-top: 0.2em;
    margin-bottom: 0.5em;
    font-family: Inter, sans-serif;
    font-size: 16px;
    line-height: 150%;
    @media (max-width: 600px) {
      margin-top: 0;
      padding-left: 0;
    }
  }

  .datePara {
    margin-top: 30px;
    @media (max-width: 600px) {
      margin-top: 0;
    }
  }
`;
const CardWrapper = styled.div`
  flex: 1;
  min-width: 290px;
  max-width: 100%;

  @media (max-width: 350px) {
    width: 100%;
    padding: 0;
  }
  .card {
    width: 100%;
    height: auto;
    border-radius: 32px;
    background-size: 100% 100%;
    padding: 50px 24px 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 600px) {
      align-items: flex-start;
    }

    .cardHeading {
      font-size: 54px;
      font-weight: 900;
      margin: 30px 0 0 0;
      font-family: "Inter", sans-serif;
      padding: 0;
    }

    .cardSubHeading {
      font-weight: 700;
      letter-spacing: -0.3px;
      font-family: Inter, sans-serif;
      font-size: 16px;
      line-height: 150%;
      padding: 0;
      margin: 0;
    }

    .cardPara {
      margin-top: 0.2em;
      margin-bottom: 0.5em;
      font-family: Inter, sans-serif;
      font-size: 16px;
      line-height: 150%;
      @media (max-width: 600px) {
        margin-top: 0;
        padding-left: 0;
      }
    }

    .datePara {
      margin-top: 30px;
      @media (max-width: 600px) {
        margin-top: 0;
      }
    }
  }

  .secondCard {
    height: 86px;
    padding: 0 1.5em;
    width: 100%;
    height: auto;
    border-radius: 32px;
    background-image: url(./images/bg-card.svg);
    background-color: #ffffff;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h3 {
      margin-top: 1em;
      margin-bottom: 1em !important;
    }
    @media (max-width: 600px) {
      align-items: flex-start;
    }
  }

  .thirdCard {
    height: auto;
    padding: 25px;
    width: 100%;
    height: auto;
    border-radius: 32px;
    background-image: url(./images/bg-img.svg);
    background-color: #f4dfe2;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 600px) {
      align-items: flex-start;
    }

    .thirdCardHeading {
      font-size: 16px;
      @media (max-width: 600px) {
        min-width: 100%;
      }
    }
  }
  @media (max-width: 600px) {
    .aboutText {
      width: 150px;
    }
    .cardPara {
      padding: 5px !important;
    }
    .card {
      background-position-x: left;
      background-size: 100%;
      background-position-y: top;
    }
    .thirdCard {
      a {
        margin-top: 1em;
      }
    }
  }
`;