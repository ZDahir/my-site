/** @format */
import React from "react";
import styled from "styled-components";

const ProfileImage = ({ src, alt }) => {
  return (
    <Wrapper>
      <img
        src={src}
        alt={alt}
      />
    </Wrapper>
  );
};

export default ProfileImage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border: 1px solid #dee2e5;
  border-radius: 50%;
  img {
    max-width: 100%;
    height: auto;
  }
`;