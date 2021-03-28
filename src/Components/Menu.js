import React, { useState, useContext} from "react";
import { AppContext } from './AppContext';

import styled from "styled-components";

import Burger from "@animated-burgers/burger-rotate";
import "@animated-burgers/burger-rotate/dist/styles.css";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const useStyles = makeStyles({
  ///Menu svg icon class names
  large: {
    position: "fixed",
    top: 20,
    left: 30,
    zIndex: 10,
    "& svg": {
      position: "fixed",
      fontSize: 45,
      color: "white",
      transiton: "1s ease",
    },
  },
  ///each Link class
  link: {
    padding: 15,
    color: "black",
  },
});

const Wrapper = styled.div`
  display: flex;
  transition: 0.7s ease;
`;
const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 40%;
  /* border-top-right-radius: 500%;
  border-bottom-right-radius: 500%; */
  z-index: 2;
  height: 100vh;
  background-color: ${({theme}) => theme === "grey" ? "grey" : "white"};
  transform: ${({ state }) =>
    state === "active" ? "translate(0, 0)" : "translate(-100%, 0)"};
  transition: 0.8s ease;
`;

const TransparentBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ state }) =>
    state === "active" ? "rgba(0, 0, 0, 0.9)" : "transparent"};
  z-index: 1;
  transform: ${({ state }) =>
    state === "active" ? "translate(0, 0)" : "translate(100%, 0)"};
  transition: 0.8s ease;
`;

const Menu = (props) => {
  const classes = useStyles();
  const [click, setClick] = useState(false);

  //Context
  const { isDarkTheme, toggleIsDarkTheme } = useContext(AppContext)

  const navLinksArr = [
    { name: "Main Page", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];
  const handleMenuClick = () => {
    setClick((click) => !click);
  };

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setClick((click) => !click);
    let appRef = props.menuRef.current;
    appRef.children[id + 1].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleAwayClick = () => {
    click && setClick(false);
  };

  const state_props = click ? "active" : "disactive"
  const theme_props = isDarkTheme ? "grey" :"white"

  return (
    <>
      <Wrapper onClick={handleAwayClick} state={state_props}>
        <Nav state={state_props} theme={theme_props}>
          {navLinksArr.map((navLink, id) => (
            <Link
              className={classes.link}
              href={navLink.href}
              key={id}
              onClick={handleNavClick(id)}
              >
              {navLink.name}
            </Link>
          ))}
          <button onClick={toggleIsDarkTheme}>Zmiana tła</button>
        </Nav>
        <TransparentBg state={state_props}></TransparentBg>
        <Burger
          onClick={handleMenuClick}
          isOpen={click}
          className={classes.large}
        />
      </Wrapper>
    </>
  );
};

export default Menu;
