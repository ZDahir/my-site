/** @format */

import React from "react";
import styled from "styled-components";
import ButtonSection from "./ButtonSection";
import MessageCard from "./MessageCard";

const SecondarySection = () => {
  return (
    <Container>
      <MessageCard />
      <ImgContainer>
        <img src="/images/article.png" alt="article" className="articleImage" />
      </ImgContainer>
      <ButtonSection BtnText="Read more articles" className="readBtn" />
    </Container>
  );
};

export default SecondarySection;
const Container = styled.div`
  width: 100%;
  .articleImage {
    // height: 400px;
    border-radius: 32px;
  }
  .readBtn {
    width: 100%;
    margin-bottom: 1em;
    &:hover {
      background-color: black;
      color: white;
    }
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ImgContainer = styled.div`
  border-radius: 32px;
  margin: 40px 0 20px;
  width: 100%;
  height: 400px;
  line-height: 300%;
  img {
    hight: 100%;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    height: auto;
  }
`;