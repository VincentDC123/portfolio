import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Education from "./components/education/Education"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Education/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
