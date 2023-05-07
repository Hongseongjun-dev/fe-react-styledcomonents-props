import React from "react";
import Box from "./components/box";
import Circle from "./components/circle";
import styled from "styled-components";
import Card from "./components/card";

const CircleWrapper = styled.div`
flex-direction: "row";
`


const Main = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <>
      <Box boxColor="red" text="아"/>
      <Box boxColor="blue" text="기"/>
      <Box boxColor="green" text="사"/>
      <Box boxColor="pink" text="자"/>
      
      <CircleWrapper>
      <Circle circleColor="pink"/>
      <Circle circleColor="red"/>
      <Circle circleColor="black"/>
      <Circle circleColor="gray"/>
      <Circle circleColor="green"/>
      <Circle circleColor="blue"/>
      <Circle circleColor="orange"/>
      </CircleWrapper>

      <br></br>

      <Card url="likelion.png" title="Introduce" content="Hi my name is Seongjun!" buttonColor1="black" buttonColor2="slategray"/>
      <Card url="deepgreen.png" title="Deep Green" content="RGB : 113b31" buttonColor1="darkslategray" buttonColor2="white"/>
      <Card url="deepblue.png" title="Deep Blue" content="RGB : 0e0e55" buttonColor1="midnightblue" buttonColor2="skyblue"/>
      <Card url="deeppurple.png" title="Deep Purple" content="RGB : 3a0c49" buttonColor1="indigo" buttonColor2="white"/>
      <Card url="deepbrown.png" title="Deep Brown" content="RGB : 3c292a" buttonColor1="saddlebrown" buttonColor2="white"/>

      
    </>
  );


};

export default Main;
