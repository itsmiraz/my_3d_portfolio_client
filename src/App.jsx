import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import { StarsCanvas } from "./components/canvas";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Feedbacks from "./components/Feedbacks";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
      <div className="relative max-w-[1440px] mx-auto z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0 ">
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <About />
        <Tech />
        <div id="#1">
        <Works />
      </div>
        <Contact />
      </div>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
