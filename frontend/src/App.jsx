import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/certificates" element={<Certificates />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      {/* <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certificates />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;