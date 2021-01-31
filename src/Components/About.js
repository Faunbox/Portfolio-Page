import React, { useRef } from "react";
import styled from "styled-components";

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

const Paragraph = styled.p``;

const About = () => {
  return (
    <>
      <AboutWrapper>
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
