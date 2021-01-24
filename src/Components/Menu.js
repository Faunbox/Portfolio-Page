import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

//Material UI Components
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  ///Menu svg icon class names
  large: {
    position: "fixed",
    top: 20,
    left: 30,
    zIndex: 1,
    "& svg": {
      position: "fixed",
      fontSize: 45,
      color: "white", //// white
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
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background-color: ${({ state }) =>
    state === "active" ? "rgba(105, 215, 45, 0.56)" : "transparent"};
  /* block-size: 0; */
  /* z-index: 1; */
  width: 100vw;
  height: 100vh;
  transition: 0.7s ease;
`;
const Nav = styled.nav`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 40%;
  height: 100vh;
  z-index: 1;
  background-color: #fac;
  transform: ${({ state }) =>
    state === "active" ? "translateX(0)" : "translateX(-100%)"};
  transition: 0.8s ease;
`;

const Menu = () => {
  const classes = useStyles();
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

  const handleNavClick = () => {
    console.log("działa");
    setClick((click) => !click);
  };

  const handleAwayClick = () => {
    // console.log("awayClcik");
    if (click) setClick(false);
  };

  const state_props = click ? "active" : "disactive";

  return (
    <>
      <Wrapper onClick={handleAwayClick} state={state_props}>
        <Nav state={state_props}>
          {navLinksArr.map((navLink, id) => (
            <Link
              className={classes.link}
              href={navLink.href}
              key={id}
              onClick={handleNavClick}>
              {navLink.name}
            </Link>
          ))}
        </Nav>
        <IconButton onClick={handleMenuClick} className={classes.large}>
          {click ? <ClearIcon /> : <MenuIcon />}
        </IconButton>
      </Wrapper>
    </>
  );
};

export default Menu;
