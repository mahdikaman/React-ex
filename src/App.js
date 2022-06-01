import "./App.css";
import InputElement from "./components/InputElement";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <InputElement value="WELCOME TO MY EXTRAORDINARY PROJECT " />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
