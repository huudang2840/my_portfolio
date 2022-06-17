import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Introduce from "./Components/Introduce/Introduce";
import Skill from "./Components/Skills/Skill";
import Project from "./Components/Project/Project";
import Comment from "./Components/Comment/Comment";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ background: darkMode ? "black" : "" }}>
      <Navbar />
      <Intro />
      <Introduce />
      <Skill />
      <Project />
      <Comment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
