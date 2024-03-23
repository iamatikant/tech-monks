import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent.jsx";
import Features from "./components/Features.jsx";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainContent />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
