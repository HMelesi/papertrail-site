import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage.jsx";
import Header from "./components/Header";
import Blog from "./components/Blog";
import YourStories from "./components/YourStories";
import About from "./components/About";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Homepage path="/" />
        <Blog path="/blog" />
        <YourStories path="/your-stories" />
        <About path="/about" />
        <SocialMedia path="/social-media" />
      </Router>
    </div>
  );
}

export default App;
