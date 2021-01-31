import React from "react";
import styled from "styled-components";

const PortfolioWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
`;

const H1 = styled.h1`
  color: white;
`;

const Portfolio = () => {
  return (
    <>
      <PortfolioWrapper>
        <H1>My skills:</H1>
      </PortfolioWrapper>
    </>
  );
};

export default Portfolio;
