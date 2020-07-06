import React, { useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
// import Homepage from "./components/Homepage.jsx";
import Header from "./components/Header";
import BlogPage from "./components/BlogPage";
import HowTo from "./components/HowTo";
import About from "./components/About";
import Footer from "./components/Footer";
// import Author from "./components/Author";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";

function App() {
  const [pathname, setPathname] = useState("/");
  return (
    <div className="app">
      <Header pathname={pathname} />

      <Router className="content">
        {/* <Homepage path="/" setPathname={setPathname} /> */}
        <BlogPage path="/blog/*" setPathname={setPathname} />
        <HowTo path="/how-to" setPathname={setPathname} />
        <About path="/" setPathname={setPathname} />
        <Contact path="/contact" setPathname={setPathname} />
        {/* <Author path="/about/authors/:author" /> */}
        <BlogPost path="/blog/posts/:id" setPathname={setPathname} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
