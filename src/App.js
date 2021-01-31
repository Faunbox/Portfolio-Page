import { useEffect, useRef, useState } from "react";
import "./App.css";

//Firebase
import firebase from "./Components/firebase";
import "firebase/analytics";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

//Components
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
// import Privacy from "./Components/Privacy";

function App() {
  const [ref, setRef] = useState({});
  const appRef = useRef(null);
  useEffect(() => {
    const app = appRef.current.children;
    setRef(app);
  }, [appRef]);

  return (
    <div ref={appRef} className="App">
      <Menu menuRef={ref} />
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
