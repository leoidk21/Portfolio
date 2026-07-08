import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LoadingScreen from "./pages/LoadingScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Certifications from "./pages/Certifications";
import ScrollTop from "./components/ScrollTop";
import Navbar from "./components/HomeComponents/Navbar";
import SmoothFollower from "./components/SmoothFollower";

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/";
  
  return (
    <>
      <SmoothFollower />
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
        <ScrollTop />
      </BrowserRouter>
  )
}

export default App;