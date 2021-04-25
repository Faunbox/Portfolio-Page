import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { WrapperStyle } from "../GlobalCss/GlobalStyles";

import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import { makeStyles } from "@material-ui/core/styles";

import { gsapAnimation } from "../Hooks/hooks";

const FooterWrapper = styled.footer`
  ${WrapperStyle}
  position: relative;
  justify-content: space-around;
  flex-wrap: wrap;
  height: auto;
  background-color: black;
  color: white;
  &:after {
    position: absolute;
    top: 0;
    left: 50%;
    content: "";
    height: 100%;
    width: 2px;
    background: white;
  }
`;

const FooterUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0 20px 0;
  list-style: none;
`;
const FooterLi = styled.li`
  color: black;
  margin: 2px 0;
  cursor: pointer;
`;

const FooterSmall = styled.small`
  display: flex;
  align-items: flex-end;
  margin-bottom: 25px;
  font-size: 0.9rem;
`;

const FooterA = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.6rem;
`;

const Footer = () => {
  const useStyles = makeStyles({
    icon: {
      fontSize: "1.6rem",
      margin: "0 3px 0 0",
    },
  });
  const classes = useStyles();

  const footerRef = useRef(null);

  useEffect(() => {
    const footerChildrens = [...footerRef.current.children];
    gsapAnimation(footerChildrens, footerRef.current, "top", "bottom-=10%");
  }, []);

  return (
    <FooterWrapper ref={footerRef}>
      <FooterUl>
        <FooterLi>
          <FooterA
            href="https://github.com/Faunbox"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon className={classes.icon} />
            Github
          </FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="tel:604181632" rel="noreferrer" target="_blank">
            <PhoneIcon className={classes.icon} />
            Telephone
          </FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA
            href="mailto:faunbox2@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <EmailIcon className={classes.icon} />
            Email
          </FooterA>
        </FooterLi>
      </FooterUl>
      <FooterSmall>© 2021 Filip Sojecki</FooterSmall>
    </FooterWrapper>
  );
};

export default Footer;
