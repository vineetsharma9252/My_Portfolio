import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import About from "./components/About";
function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
      <Main />
    </>
  );
}
export default App;
