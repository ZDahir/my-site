import React from "react";
import styled from "styled-components";

const Line = ({ className }) => {
  return <HrLine className={className}></HrLine>;
};

export default Line;
const HrLine = styled("div")`
  width: 550px;
  height: 1px;
  border: 1px solid #48484821;
  margin-top: 3em;
`;