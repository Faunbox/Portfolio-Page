import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

// import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  div: {
    width: "100px",
    height: "100px",
    margin: "15px",
    borderRadius: "50%",
    cursor: "-webkit-grab",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    touchAction: "none",
    // zIndex: "1000",
    backgroundImage: (props) => `url(${props.url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
});

const Drag = (props) => {
  const { url } = props;
  const styleProps = {
    url,
  };
  const classes = useStyles(styleProps);
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const bind = useDrag(({ down, movement }) => {
    set({ xy: down ? movement : [0, 0] });
  });

  return (
    <>
      <animated.div
        {...bind()}
        className={classes.div}
        style={{
          transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
        }}
      />
    </>
  );
};

export default Drag;
