import React, { useRef, useContext, useEffect } from "react";
import styled from "styled-components";

import {AppContext} from './AppContext';
import {gsapAnimation} from './hooks'

import Draggables from "./Cards";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioWrapper = styled.section`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({theme}) => theme === true ? "black" : "white"};
`;

const H1 = styled.h1`
  color: ${({theme}) => theme === true ? "white" : "black"};
`;

const Portfolio = () => {
  const wrapperRef = useRef(null);
  const {isDarkTheme} = useContext(AppContext)

  useEffect(() => {
    const refChildrens = [...wrapperRef.current.children]; 
    gsapAnimation(refChildrens, wrapperRef.current, "top", "center -=20%")  
    ;
  }, []);

  return (
    <>
      <PortfolioWrapper ref={wrapperRef} theme={isDarkTheme} id="portfolio">
        <H1 theme={isDarkTheme}>My skills:</H1>
        <Draggables />
      </PortfolioWrapper>
    </>
  );
};

export default Portfolio;
