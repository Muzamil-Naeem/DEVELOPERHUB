import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Booking from "./pages/booking";
import Blog from "./pages/blog";
import Services from "./pages/services";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/booking" element={<Booking />} />
         <Route path="/blog" element={<Blog />} /> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;