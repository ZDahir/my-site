import React from "react";
import styled from "styled-components";

const ButtonSection = ({ className, BtnIcon, BtnText, onClick, url }) => {
  const handleClick = () => {
    if (url) {
      window.location.href = url; // Redirect to the specified URL
    } else if (onClick) {
      onClick(); // Execute the provided onClick function
    }
  };

  return (
    <CustomButton className={className} onClick={handleClick}>
      {BtnIcon} <span>{BtnText}</span>
    </CustomButton>
  );
};

export default ButtonSection;

export const CustomButton = styled.button`
  background-color: white;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  height: 48px;
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  letter-spacing: -0.3px;
  gap: 10px;
  border-radius: 16px;
  width: fit-content;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.02); /* Slightly scales up the button for a smooth effect */
  }

  &:active {
    transform: scale(0.98); /* Scales down slightly on click for feedback */
  }

  span {
    font-size: 16px;
  }
`;
