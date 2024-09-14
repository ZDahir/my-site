/** @format */

import React from "react";
import BlackCard from "./BlackCard";
import styled from "styled-components";
import ButtonSection from "./ButtonSection";

const SecondarySection = () => {
  return (
    <Container>
      <BlackCard />
      <img
        src='/images/article.png'
        alt='article'
        className='articleImage'
      />
      <ButtonSection
        BtnText='Read more articles'
        className='readBtn'
      />
    </Container>
  );
};

export default SecondarySection;
const Container = styled.div`
  .articleImage {
    margin: 40px 0 15px 0;
    width: 566px;
    height: 400px;
    border-radius: 32px;
  }
  .readBtn {
    width: 100%;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;