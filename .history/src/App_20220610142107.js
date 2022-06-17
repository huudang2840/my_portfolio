import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Introduce from "./Components/Introduce/Introduce";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Introduce />
      <Skil />
    </div>
  );
}

export default App;
