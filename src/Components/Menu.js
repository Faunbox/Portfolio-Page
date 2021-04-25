import React, { useState, useContext, useRef, useEffect } from "react";
import { AppContext } from "./AppContext";

import styled from "styled-components";

//Burger menu icon
import { HamburgerButton } from "react-hamburger-button";

//gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
  z-index: 100;
  height: 100vh;
  background-color: ${({ theme }) => (theme === true ? "black" : "white")};
  transform: ${({ state }) =>
    state === true ? "translate(0, 0)" : "translate(-100%, 0)"};
  transition: 0.8s ease;
  color: ${({ theme }) => (theme === true ? "white" : "black")};
  font-size: 1.6rem;
`;
const A = styled.a`
  padding: 15px;
  color: ${({ theme }) =>
    theme === true ? "rgb(240, 240, 240)" : "rgb(30, 30, 30)"};
  &:hover {
    font-weight: bold;
  }
`;

const Burger = styled(HamburgerButton)`
  top: 20px;
  left: 20px;
  z-index: 100;
`;

const TransparentBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ state }) =>
    state === true ? "rgba(0, 0, 0, 0.8)" : "transparent"};
  z-index: 1;
  transform: ${({ state }) =>
    state === true ? "translate(0, 0)" : "translate(100%, 0)"};
  transition: 0.8s ease;
`;

const Menu = ({ menuRef }) => {
  //Context
  const { isDarkTheme } = useContext(AppContext);

  //State
  const [click, setClick] = useState(false);

  //Ref
  const burgerRef = useRef(null);

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
    let appRef = menuRef.current;
    appRef.children[id + 1].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleAwayClick = () => {
    click && setClick(false);
  };

  useEffect(() => {
    const burger = burgerRef.current.lastChild;
    gsap.fromTo(
      burger,
      { autoAlpha: 0, y: "+=30" },
      { autoAlpha: 1, y: 0, duration: 1, ease: "ease-In" }
    );
  }, [burgerRef]);

  return (
    <>
      <Wrapper onClick={handleAwayClick} state={click} ref={burgerRef}>
        <Nav state={click} theme={isDarkTheme}>
          {navLinksArr.map((navLink, id) => (
            <A
              href={navLink.href}
              key={id}
              onClick={handleNavClick(id)}
              theme={isDarkTheme}
            >
              {navLink.name}
            </A>
          ))}
        </Nav>
        <TransparentBg state={click}></TransparentBg>
        <Burger
          onClick={handleMenuClick}
          animationDuration={0.7}
          color={isDarkTheme ? "white" : "black"}
          open={click}
          strokeWidth={3}
          height={25}
        />
      </Wrapper>
    </>
  );
};

export default Menu;
