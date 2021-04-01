import React, { useState, useContext} from "react";
import { AppContext } from './AppContext';

import styled from "styled-components";


//Burger menu icon
import { HamburgerButton } from "react-hamburger-button";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

//gsap
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const useStyles = makeStyles({
  ///Menu svg icon class names
  large: {
    top: 20,
    left: 20,
    zIndex: 10,
    // borderRadius: 50,
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
  z-index: 2;
  height: 100vh;
  background-color: ${({theme}) => theme === "true" ? "black" : "white"};
  transform: ${({ state }) =>
    state === "active" ? "translate(0, 0)" : "translate(-100%, 0)"};
  transition: 0.8s ease;
`;
const A = styled.a`
padding: 15px;
color: ${({theme}) => theme === "true" ? "rgb(240, 240, 240)" : "rgb(30, 30, 30)"};
&:hover {
  font-weight: bold;
}
`;

const TransparentBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ state }) =>
    state === "active" ? "rgba(0, 0, 0, 0.8)" : "transparent"};
  z-index: 1;
  transform: ${({ state }) =>
    state === "active" ? "translate(0, 0)" : "translate(100%, 0)"};
  transition: 0.8s ease;
`;

const Menu = (props) => {
  //Context
  const { isDarkTheme, toggleIsDarkTheme } = useContext(AppContext)

  //MUi classes 
  const classes = useStyles(props);

  //State
  const [click, setClick] = useState(false);

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
    handleMenuClick();
    let appRef = props.menuRef.current;
    appRef.children[id + 1].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleAwayClick = () => {
    click && setClick(false);
  };

  const state_props = click && "active";
  const theme_props = click && "true";

  return (
    <>
      <Wrapper onClick={handleAwayClick} state={state_props}>
        <Nav state={state_props} theme={theme_props}>
          {navLinksArr.map((navLink, id) => (
            <A
              href={navLink.href}
              key={id}
              onClick={handleNavClick(id)}
              theme={theme_props}
              >
              {navLink.name}
            </A>
          ))}
          <button onClick={toggleIsDarkTheme}>Zmiana tła</button>
        </Nav>
        <TransparentBg state={state_props}></TransparentBg>
        <HamburgerButton 
          onClick={handleMenuClick}
          animationDuration={0.7}
          color={isDarkTheme ? "white" : "black"}
          open={click}
          strokeWidth={3}
          height={25}
          className={classes.large}
        />
      </Wrapper>
    </>
  );
};

export default Menu;
