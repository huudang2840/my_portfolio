import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Introduce from "./Components/Introduce/Introduce";
import Skill from "./Components/Skills/Skill";
import Project from "./Components/Project/Project";
import Comment from "./Components/Comment/Comment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Introduce />
      <Skill />
      <Project />
      <Comment />
      <Contact />
    </div>
  );
}

export default App;
