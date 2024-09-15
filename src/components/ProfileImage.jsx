import React from "react";
import styled from "styled-components";

const ProfileImage = ({ src, alt }) => {
  return (
    <Container>
      <Wrapper>
        <StyledImage src={src} alt={alt} />
      </Wrapper>
    </Container>
  );
};

export default ProfileImage;

const Container = styled.div`
  margin-top: 2.4em;
  padding: 8px;
  border: 2px solid #dee2e5;
  border-radius: 50%; /* Ensures the container is circular */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  overflow: hidden; /* Ensures the image doesn't overflow the container */
  border-radius: 50%; /* Makes the wrapper circular */
  @media (max-width: 768px) {
    width: 60px !important;
    height: 60px !important;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire area */
  border-radius: 50%; /* Ensures the image itself is circular */
`;
