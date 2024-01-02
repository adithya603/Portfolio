import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        ReactDOM.render(
        <>
            <Navbar />
            <Front />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </>, document.getElementById("root"))
    )
}

export default App