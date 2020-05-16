import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage.jsx";
import Header from "./components/Header";
import Blog from "./components/BlogList";
import YourStories from "./components/YourStories";
import About from "./components/About";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import Author from "./components/Author";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <div className="app">
      <Header />
      <Router className="content">
        <Homepage path="/" />
        <Blog path="/blog" />
        <YourStories path="/your-stories" />
        <About path="/about" />
        <SocialMedia path="/social-media" />
        <Author path="/authors/:author" />
        <BlogPost path="/posts/:title" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
