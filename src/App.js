import * as React from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AiAnalyser from './components/AiAnalyser/AiAnalyser';
import Hero from './components/Hero/Hero';
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AiAnalyser />
      <Hero />
      <Companies />
      <Contact />
    </div>
  );
}

export default App;
