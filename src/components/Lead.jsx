import React from "react";
import styled from "styled-components";

const Lead = ({ leadText }) => {
  return (
    <LeadCard>
      <h3>{leadText}</h3>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14M21 9V3V9ZM21 3H15H21ZM21 3L13 11L21 3Z"
            stroke="#783FF3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </LeadCard>
  );
};

export default Lead;

const LeadCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px;
  background-color: white;
  border-radius: 16px;
  margin: 0.6em 0;
  h3 {
    color: #070707;
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }
`;