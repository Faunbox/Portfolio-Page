import React, { useEffect, useRef, useContext } from "react";

import { AppContext } from "./AppContext";

import styled from "styled-components";
import { ThemedWrapperStyle } from "../GlobalCss/GlobalStyles";

//Material UI Components
import Switch from "@material-ui/core/Switch";
import { FormControlLabel } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import gsap from "gsap/";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

///Wrapper
const MainSection = styled.section`
  ${ThemedWrapperStyle}
  text-align: center;
  transition: 1s ease;
`;

const H1 = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;

const H2 = styled.h2`
  font-size: 35px;
  font-weight: normal;
`;
const ArrowIconDiv = styled.div`
  position: fixed;
  top: 90%;
  left: 50%;
  z-index: 1;
  font-size: 3.5rem;
  transform: translate(-50%, -50%);
`;

const ThemeControl = styled(FormControlLabel)`
  position: absolute;
  top: 10px;
  right: 0px;
  z-index: 10;
`;

const ThemeSwitch = styled(Switch)`
  .Mui-checked {
    color: white;
  }
  .MuiSwitch-track {
    background-color: white;
  }
  .MuiSwitch-colorSecondary.Mui-checked {
    background-color: black;
  }
`;

const Main = () => {
  //Refs
  const mainSectionRef = useRef(null);
  const arrowRef = useRef(null);

  //Context
  const { isDarkTheme, toggleIsDarkTheme } = useContext(AppContext);

  //Arrow behavior
  const scrollDownArrow = () => {
    const arrow = arrowRef.current;
    gsap.to(window, 1.3, { scrollTo: window.screen.height });
    gsap.to(arrow, 1, { autoAlpha: 0, ease: "easeIn" });
  };
  useEffect(() => {
    const arrow = arrowRef.current;
    const mainSection = mainSectionRef.current;

    //Arrow Icon Bouncing
    const arrowTl = gsap.timeline({ repeat: -1, yoyo: true });
    arrowTl.fromTo(arrow, 1, { y: "+=30", repeat: -1 }, { y: 10 });

    //Arrow Div opacity
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
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [arrowRef]);

  // Animate MainSection on page loads
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
    <MainSection ref={mainSectionRef} theme={isDarkTheme} id="main">
      <ThemeControl
        control={<ThemeSwitch onClick={toggleIsDarkTheme} />}
        label={isDarkTheme ? "White?" : "Dark?"}
        labelPlacement={"top"}
      />
      <H1>Hello!</H1>
      <H2>I'm Filip, Front-End Developer</H2>
      <ArrowIconDiv onClick={scrollDownArrow}>
        <ArrowDownwardIcon ref={arrowRef} fontSize="inherit" />
      </ArrowIconDiv>
    </MainSection>
  );
};

export default Main;
