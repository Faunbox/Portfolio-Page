import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

export const gsapAnimation = (element, trigger, triggerStart, triggerEnd) => {
    element.forEach((element) => {
      gsap.fromTo(
        element,
        1.5,        
        { autoAlpha: 0, y: "+=30", },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: trigger,
            start: `${triggerStart} ${triggerEnd}`,
            toggleActions: "play none none reverse",
          },
        }
      );
    });  
  }
  
  gsapAnimation.propTypes = {
    element: PropTypes.array,
    trigger: PropTypes.element,
    triggerStart: PropTypes.string,
    triggerEnd: PropTypes.string,
  }.isRequired