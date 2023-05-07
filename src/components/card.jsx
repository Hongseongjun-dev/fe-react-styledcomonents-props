import React from "react";
import styled from "styled-components";

const BackGround = styled.div`
  text-align: center;
  width: 300px;
  height: 380px;
  margin: 10px;
  border-radius: 20px;
  background-color: gray;
  display: inline-block;
`

const Image = styled.img`
  margin-top : 10px;
  width : 280px;
  height: 200px;
  border-radius: 20px;
  content:url(${(props) => props.url});
`

const Title = styled.h1`
    margin-top : 1px;
    margin-left:15px;
    margin-bottom: auto;
    text-align: left;
    color: black;
`

const Content = styled.p`
    margin-top:7px;
    margin-left:20px;
    margin-right:20px;
    text-align:left;
    color: hsla(0, 0%, 1.9607843137254901%, 0.671);
`

const Button = styled.button`
   // border:none;
    background : linear-gradient(to right, ${(props) => props.buttonColor1} , ${(props) => props.buttonColor2} );
    color: whitesmoke;
    border-radius:30px;
    width:250px;
    height:50px;
    font-size:18px;
    margin-top:10px;
`
const Card = (props) => {
  return (
    <>
      <BackGround>
        <Image url={props.url}/>
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
        <Button buttonColor1={props.buttonColor1} buttonColor2={props.buttonColor2}>Action</Button>
      </BackGround>
    </>
  )
}

export default Card;