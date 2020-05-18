import React, { useState, useEffect } from "react";
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
  const [pathname, setPathname] = useState("/");
  return (
    <div className="app">
      <Header pathname={pathname} />
      <Router className="content">
        <Homepage path="/" setPathname={setPathname} />
        <Blog path="/blog" setPathname={setPathname} />
        <YourStories path="/your-stories" setPathname={setPathname} />
        <About path="/about" setPathname={setPathname} />
        <SocialMedia path="/social-media" setPathname={setPathname} />
        <Author path="/about/authors/:author" />
        <BlogPost path="/blog/posts/:articleid" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
