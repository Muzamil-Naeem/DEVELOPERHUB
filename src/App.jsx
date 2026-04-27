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
import { ToastContainer } from "react-toastify";
import Signup from "./pages/signup";
import Login from "./pages/login";
import BlogDetail from "./pages/blogdetails";
import ScrollToTop from "./components/Scrolltop";
import ToggleTheme from "./components/toggletheme";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
ScrollTrigger.config({
  ignoreMobileResize: true,
});



function App() {
  
  return (
    <>
      <ToggleTheme />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/booking" element={<Booking />} />
         <Route path="/blog" element={<Blog />} /> 
         <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
        <ToastContainer position="top-right" />
      <Footer />
          
    </>
  );
}

export default App;