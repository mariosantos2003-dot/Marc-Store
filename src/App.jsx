import React from "react";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Collection from "./components/Collection/Collection";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
