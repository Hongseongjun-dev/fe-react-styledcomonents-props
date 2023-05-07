import React from "react";
import styled from "styled-components";

const CircleEach = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 100px;
  background-color: ${(props) => (props.circleColor ? props.circleColor : "green")};
  display: inline-block;
`;


const Circle = (props) => {
  return (
    <>
      <CircleEach circleColor={props.circleColor}>
      </CircleEach>
    </>
  );
};

export default Circle;