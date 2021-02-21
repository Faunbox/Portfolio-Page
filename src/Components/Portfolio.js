import React, { useRef } from "react";
import styled from "styled-components";

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
  background-color: black;
`;

const H1 = styled.h1`
  color: white;
`;

const Portfolio = () => {
  const wrapperRef = useRef(null);

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
      <PortfolioWrapper ref={wrapperRef} id="portfolio">
        <H1>My skills:</H1>
        <Draggables />
      </PortfolioWrapper>
    </>
  );
};

export default Portfolio;
