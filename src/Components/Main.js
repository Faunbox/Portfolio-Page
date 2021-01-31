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
  font-size: 35px;
  font-weight: normal;
`;
const ArrowIcon = styled.div`
  position: fixed;
  color: white;
  top: 90%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
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
    const mainSection = mainSectionRef.current;

    //Arrow Icon Bouncing
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.fromTo(arrow, 1, { y: "+=30" }, { y: 10 });

    //Arrow Div functionality
    gsap.fromTo(
      arrow,
      1,
      { autoAlpha: 1 },
      {
        autoAlpha: 0,
        display: "none",
        scrollTrigger: {
          trigger: mainSection,
          start: "10% top",
          // markers: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [arrowRef]);

  //Animate MainSection on page loads
  useEffect(() => {
    const mainSectionChilldrens = mainSectionRef.current.children;
    const tl = gsap.timeline({ duration: 1, ease: "ease-In" });
    [...mainSectionChilldrens].forEach((element) => {
      tl.fromTo(
        element,
        1,
        { autoAlpha: 0, y: "+=40" },
        { autoAlpha: 1, y: 0 }
      );
    });
  }, [mainSectionRef]);

  return (
    <MainSection ref={mainSectionRef}>
      <Hello>Hello!</Hello>
      <Intro>
        I'm Filip, <span>Front-End Developer</span>
      </Intro>
      <ArrowIcon onClick={scrollDown}>
        <ArrowDownwardIcon ref={arrowRef} fontSize="large" />
      </ArrowIcon>
    </MainSection>
  );
};

export default Main;
