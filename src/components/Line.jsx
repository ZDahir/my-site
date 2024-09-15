/** @format */

import React from "react";
import styled from "styled-components";

const Line = ({ className }) => {
  return <HrLine className={className}></HrLine>;
};

export default Line;
const HrLine = styled("div")`
  width: 100%;
  height: 1px;
  background-color: #48484821;
  margin-top: 3em;
`;