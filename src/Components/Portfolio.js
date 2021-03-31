import React, { useRef, useContext } from "react";
import styled from "styled-components";

import {AppContext} from './AppContext';

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

  // useEffect(() => {
  //   const refChildrens = [...wrapperRef.current.children];
  //   const tl = gsap.timeline({ duration: 1 });
  //   refChildrens.forEach((element) => {
  //     tl.fromTo(
  //       element,
  //       { autoAlpha: 0, y: "+=30" },
  //       {
  //         autoAlpha: 1,
  //         y: 0,
  //         scrollTrigger: {
  //           trigger: wrapperRef.current,
  //           start: "top center-=25%",
  //           markers: true,
  //           // toggleActions: "play play play play",
  //         },
  //       }
  //     );
  //   });
  // }, []);

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
