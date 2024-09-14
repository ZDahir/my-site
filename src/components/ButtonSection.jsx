/** @format */
import React from "react";
import styled from "styled-components";

const ButtonSection = ({ className, BtnIcon, BtnText }) => {
  return (
    <CustomButton className={className}>
      {BtnIcon} {BtnText}
    </CustomButton>
  );
};

export default ButtonSection;

export const CustomButton = styled.button`
  background-color: white;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  width: fit-content;
  cursor: pointer;
  border: none;
`;