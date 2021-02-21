import { useRef } from "react";
import "./App.css";

//Firebase
import firebase from "./Components/firebase";
import "firebase/analytics";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

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
// import Privacy from "./Components/Privacy";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const appRef = useRef(null);

  return (
    <div ref={appRef} className="App">
      <Menu menuRef={appRef} />
      <Main />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Privacy /> */}
    </div>
  );
}

export default App;
