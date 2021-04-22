import React, { useEffect, useRef, useContext } from "react";
import { gsapAnimation } from "../Hooks/hooks";
import styled from "styled-components";
import { ThemedWrapperStyle } from "../GlobalCss/GlobalStyles";
import { AppContext } from "./AppContext";

import gsap from "gsap/";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutWrapper = styled.article`
  ${ThemedWrapperStyle}
  margin: 0 auto;
  padding: 5%;
`;

const H2 = styled.h2`
  margin: 0px 0 20px 0;
`;

const Paragraph = styled.p``;
const SecondParagraph = styled.p`
  margin-top: 30px;
`;

const About = () => {
  //Ref
  const aboutRef = useRef(null);

  //State
  const { isDarkTheme } = useContext(AppContext);

  //Whole section animation
  useEffect(() => {
    const wrapperChildrens = [...aboutRef.current.children];
    gsapAnimation(wrapperChildrens, aboutRef.current, "top", "center-=20%");
  });

  return (
    <>
      <AboutWrapper ref={aboutRef} id="about" theme={isDarkTheme}>
        <H2>Some info about me</H2>
        <Paragraph>
          My name is Filip Sojecki and I started my journey to become Junior
          Front-End Developer about year ago. During this time ive learned a lot
          and programming became my passion. I spend all my free time to improve
          my skills and discover new technologies.
        </Paragraph>
        <SecondParagraph>
          As a person, im really humble and positive. I love physical exercise
          (graduate PE student), traveling and of course computer science. At
          this moment i live in Kraków.
        </SecondParagraph>
      </AboutWrapper>
    </>
  );
};

export default About;
