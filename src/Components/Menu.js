import React, { useState } from "react";

import styled from "styled-components";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
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
    zIndex: 10,
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
  background-color: grey;
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
              onClick={handleNavClick(id)}>
              {navLink.name}
            </Link>
          ))}
        </Nav>
        <TransparentBg state={state_props}></TransparentBg>

        <IconButton onClick={handleMenuClick} className={classes.large}>
          {click ? <ClearIcon /> : <MenuIcon />}
        </IconButton>
      </Wrapper>
    </>
  );
};

export default Menu;
