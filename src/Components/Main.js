import React from "react";

import styled from "styled-components";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const MainSection = styled.section`
  ///Wrapper
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  text-align: center;
  color: white;
  height: 100vh;
  /* overflow: hidden; */
`;

const Hello = styled.p`
  font-size: 60px;
  font-weight: bold;
`;

const Intro = styled.p`
  font-size: 40px;
`;
const ArrowIcon = styled.div`
  position: fixed;
  color: red;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s ease;
`;

const Main = () => {
  return (
    <MainSection>
      <Hello>Hello!</Hello>
      <Intro>I'm Filip, Front-End Developer</Intro>
      <ArrowIcon>
        <ArrowDownwardIcon fontSize="large" />
      </ArrowIcon>
    </MainSection>
  );
};

export default Main;
