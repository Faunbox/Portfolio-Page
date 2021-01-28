import React, { useRef } from "react";
import styled from "styled-components";

import MyImg from "../Images/P1000785-removebg-preview.png";

const AboutWrapper = styled.article`
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

const Paragraph = styled.p``;

const AboutImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  margin: 15px;
`;
const About = () => {
  return (
    <>
      <AboutWrapper>
        <AboutImage alt="my picture" src={MyImg} />
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          iste, perspiciatis quo consectetur ad veniam vel aperiam labore,
          possimus, enim tempora nulla voluptas ea eius atque aliquam porro
          accusantium debitis nobis sunt consequatur. Excepturi voluptates
          dignissimos inventore repudiandae quae, ipsum sint delectus
          perferendis officiis neque nostrum accusamus sequi fuga iure mollitia
          obcaecati similique nihil, architecto ratione doloribus placeat
          consectetur rem tenetur? Explicabo eius minus ex tempore harum iusto
          id repudiandae architecto perspiciatis magni magnam pariatur mollitia
          sed, laboriosam quis facere? Exercitationem, praesentium in cum
          molestiae error debitis repudiandae fugiat nobis perferendis quasi
          eos, ab similique dolor animi recusandae nihil iusto!
        </Paragraph>
      </AboutWrapper>
    </>
  );
};

export default About;
