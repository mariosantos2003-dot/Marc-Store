import React from "react";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Collection from "./components/Collection/Collection";
import "./index.css";

function App() {
  return (
    <div className="main-container" style={{ backgroundColor: "#000" }}>
      <Header />
      <Logo />
      <Collection />
    </div>
  );
}

export default App;