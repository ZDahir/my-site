import React from "react";
import styled from "styled-components";
import ButtonSection from "./ButtonSection";
import MessageCard from "./MessageCard";

const imageGallery = [
  { src: "/images/article.png", alt: "Article 1", description: "An insightful article about technology." },
  { src: "/images/article.png", alt: "Article 2", description: "Exploring the world of design." },
  { src: "/images/article.png", alt: "Article 3", description: "Tips and tricks for better productivity." },
];

const SecondarySection = () => {
  return (
    <Container>
      <MessageCard />
      <GalleryContainer>
        {imageGallery.map((image, index) => (
          <ImgContainer key={index}>
            <img src={image.src} alt={image.alt} className="galleryImage" />
            <Description>{image.description}</Description>
          </ImgContainer>
        ))}
      </GalleryContainer>
      <ButtonSection BtnText="Read more articles" className="readBtn" />
    </Container>
  );
};

export default SecondarySection;

const Container = styled.div`
  width: 100%;
  
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

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust the gap between images */
  justify-content: space-around;
  margin: 40px 0 20px;
`;

const ImgContainer = styled.div`
  flex: 1 1 30%; /* Make each image container responsive */
  max-width: 30%;
  text-align: center;
  
  .galleryImage {
    width: 100%;
    border-radius: 32px;
    overflow: hidden;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

