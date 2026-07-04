import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LoadingScreen from "./pages/LoadingScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Certifications from "./pages/Certifications";

import Navbar from "./components/Navbar";
import Divider from "./components/Divider";
import TechCard from "./components/TechCard";
import Button from "./components/Button";
import Intro from "./components/Intro";
import ProjectCard from "./components/ProjectCard";

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/";

  return (
    <>
        {!hideLayout && <Navbar />}
          <Routes>

            <Route path="/" element={<LoadingScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/certifications" element={<Certifications />} />

          </Routes>
      </>
  );
}

function App() {
  return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
  )
}

export default App;