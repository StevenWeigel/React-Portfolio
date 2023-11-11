import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
