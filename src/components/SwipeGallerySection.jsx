import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Pagination } from "swiper/modules"; // Import necessary Swiper modules

import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation"; // Import Navigation module styles
import "swiper/css/pagination"; // Import Pagination module styles

import ButtonSection from "./ButtonSection";

// Swiper configuration for swipe functionality
const swipeConfig = {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: true,
  pagination: { clickable: true },
  modules: [Navigation, Pagination], // Include necessary Swiper modules
};

// Image or video links for the gallery
const mediaGallery = [
  { 
    type: "image", 
    src: "/images/article.png", 
    alt: "Article 1", 
    description: "An insightful article about technology." 
  },
  { 
    type: "video", 
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    alt: "YouTube Video", 
    description: "An interesting video to watch." 
  },
  { 
    type: "image", 
    src: "/images/article2.png", 
    alt: "Article 2", 
    description: "Exploring the world of design." 
  },
];

const SwipeGallerySection = () => {
  return (
    <Container>
      <SwiperContainer>
        <Swiper {...swipeConfig}>
          {mediaGallery.map((item, index) => (
            <SwiperSlide key={index}>
              <MediaContainer>
                {item.type === "image" ? (
                  <img src={item.src} alt={item.alt} className="mediaImage" />
                ) : (
                  <iframe 
                    src={item.src} 
                    title={item.alt} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    className="mediaVideo"
                  />
                )}
                <Description>{item.description}</Description>
              </MediaContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
      <ButtonSection BtnText="View more" className="viewBtn" />
    </Container>
  );
};

export default SwipeGallerySection;

// Styled Components

const Container = styled.div`
  width: 100%;
  padding: 20px;

  .viewBtn {
    width: 100%;
    margin-top: 20px;
    &:hover {
      background-color: black;
      color: white;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const SwiperContainer = styled.div`
  margin: 40px 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  .mediaImage {
    width: 100%;
    max-width: 600px;
    border-radius: 16px;
  }

  .mediaVideo {
    width: 100%;
    max-width: 600px;
    height: 350px;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    .mediaImage, .mediaVideo {
      width: 100%;
    }
  }
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;
