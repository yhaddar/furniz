import React from "react";
import { Navbar } from "./components/Navbar";
import "../src/scss/Furniz.css";
import { Home } from "./components/Home";
import { Service } from "./components/Service";
import { About } from "./components/About";
import { Contact} from "./components/Contact";
import { Person } from "./components/Person";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Service />
        <About />
        <Contact />
        < Person />
        <Footer />
    </div>
  );
}

export default App;
