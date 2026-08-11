import React, { useEffect } from "react";
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
import Section from "./components/Section";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <Navbar />
      <main>
        <Section><Home /></Section>
        <Section><About /></Section>
        <Section><Skills /></Section>
        <Section><Projects /></Section>
        <Section><Education /></Section>
        <Section><Experience /></Section>
        <Section><Certificates /></Section>
        <Section><Contact /></Section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;