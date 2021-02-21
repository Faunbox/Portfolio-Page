import React from "react";

import Drag from "./Drag";

import styled from "styled-components";

import JS from "../Images/JS.png";
import CSS from "../Images/CSS.png";
import REACT from "../Images/REACT.png";
import MATERIAL from "../Images/MATERIAL.png";
import GSAP from "../Images/GSAP.png";
import HTML from "../Images/HTML.webp";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

function Draggables() {
  const skills = [JS, CSS, HTML, REACT, MATERIAL, GSAP];

  // Bind it to a component
  return (
    <>
      <Wrapper>
        {skills.map((element, index) => (
          <Drag key={index} url={element} />
        ))}
      </Wrapper>
    </>
  );
}

export default Draggables;
