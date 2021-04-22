import React, { useRef } from "react";

//Context-API
import AppProvider from "./Components/AppContext";

//Firebase
// eslint-disable-next-line no-unused-vars
import firebase from "./Components/firebase";

//GlobalStyles
import { GlobalStyles } from "./GlobalCss/GlobalStyles";

//gsap
import gsap from "gsap/";
import ScrollTrigger from "gsap/ScrollTrigger";

//Components
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const appRef = useRef(null);

  return (
    <AppProvider>
      <GlobalStyles />
      <div ref={appRef} className="App">
        <Menu menuRef={appRef} />
        <Main menuRef={appRef} />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
