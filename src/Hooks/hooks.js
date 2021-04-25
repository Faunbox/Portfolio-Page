import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const gsapAnimation = (
  element,
  trigger,
  triggerStart,
  triggerEnd,
  markers = false
) => {
  element.forEach((element) => {
    gsap.fromTo(
      element,
      1.5,
      { autoAlpha: 0, y: "+=20" },
      {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: trigger,
          start: `${triggerStart} ${triggerEnd}`,
          toggleActions: "play none none reverse",
          markers: markers,
        },
      }
    );
  });
};

gsapAnimation.propTypes = {
  element: PropTypes.array,
  trigger: PropTypes.element,
  triggerStart: PropTypes.string,
  triggerEnd: PropTypes.string,
  markers: PropTypes.bool,
}.isRequired;
export { gsapAnimation };
