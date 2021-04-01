import { useEffect, useRef} from "react";
import "./App.css";

//Context-API
import AppProvider from './Components/AppContext'

//Firebase
// eslint-disable-next-line no-unused-vars
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

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const appRef = useRef(null);



  //Contact component animation
  useEffect(() => {
    const refChildrens = appRef.current.children
    const contactRef = [...refChildrens].find((element) => element.id === "contact")
    gsap.to(contactRef, 1, {
    backgroundColor:"white", 
    scrollTrigger:{
      trigger: contactRef,
      // markers: true,
      start: "top center-=20%",
      toggleActions: "play none none reverse",
    }})
  })

  return (
    <AppProvider>
        <div ref={appRef} className="App">
        <Menu menuRef={appRef} />
        <Main />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        </div>
    </AppProvider>
  );
}

export default App;
