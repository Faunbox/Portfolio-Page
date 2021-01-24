import "./App.css";
import firebase from "./Components/firebase";
import "firebase/analytics";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import { useEffect } from "react";
// import Privacy from "./Components/Privacy";

function App() {
  return (
    <div className="App">
      <Menu />
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
