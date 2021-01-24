import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  /* width: 100%; */
  height: 30px;
  background-color: transparent;
  color: white;
  text-align: center;
`;

// const Small = styled.small``;

const Footer = () => {
  return (
    <Wrapper>
      <small>Tekst</small>
    </Wrapper>
  );
};

export default Footer;
