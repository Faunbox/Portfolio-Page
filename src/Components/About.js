import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import gsap from "gsap/";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutWrapper = styled.article`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
  padding: 5%;
  color: white;
  background-color: black;
`;

const H2 = styled.h2`
  margin: 0px 0 20px 0;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const About = () => {
  const aboutRef = useRef(null);

  //Whole section animation

  useEffect(() => {
    const wrapperChildrens = [...aboutRef.current.children];
    const tl = gsap.timeline();
    wrapperChildrens.forEach((element) => {
      tl.fromTo(
        element,
        1,
        { autoAlpha: 0, y: "+=30" },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top top",
            markers: true,
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  return (
    <>
      <AboutWrapper ref={aboutRef} id="about">
        <H2>Some info about me</H2>
        <Paragraph>
          My name is Filip Sojecki and I start my jurney to become Junior
          Front-End Developer about year ago. During this time ive learned a lot
          and programming became my passion. I spend all my free time to improve
          my skills and discover new technologies.
        </Paragraph>
        <br />
        <Paragraph>
          As a person, im really huble and positive. I love physical exercise
          (graduate PE student), traveling and of course computer science. At
          this moment i live in Kraków.
        </Paragraph>
      </AboutWrapper>
    </>
  );
};

export default About;
