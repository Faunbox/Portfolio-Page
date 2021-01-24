import React, { useEffect, useRef } from "react";

import styled from "styled-components";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import gsap from "gsap/";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const MainSection = styled.section`
  ///Wrapper
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  text-align: center;
  color: white;
  min-height: 100vh;
`;

const Hello = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;

const Intro = styled.h2`
  font-size: 40px;
  font-weight: normal;
`;
const ArrowIcon = styled.div`
  position: fixed;
  color: red;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s ease;
  /* overflow: scroll; */
`;

const Main = () => {
  const mainSectionRef = useRef(null);
  const arrowRef = useRef(null);

  //Arrow behavior
  const scrollDown = () => {
    const arrow = arrowRef.current;
    gsap.to(window, { duration: 2, scrollTo: window.screen.height });
    gsap.to(arrow, 1, { autoAlpha: 0, ease: "easeIn" });
  };

  useEffect(() => {
    const arrow = arrowRef.current;
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(arrow, 2, { y: 50 }, { y: -80 });
  }, [arrowRef]);

  return (
    <MainSection ref={mainSectionRef}>
      <Hello>Hello!</Hello>
      <Intro>I'm Filip, Front-End Developer</Intro>
      <ArrowIcon ref={arrowRef} onClick={scrollDown}>
        <ArrowDownwardIcon fontSize="large" />
      </ArrowIcon>
    </MainSection>
  );
};

export default Main;
