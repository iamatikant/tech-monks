import { Link } from "react-router-dom";

import heroImage from "../assets/images/pexels-canva-studio-3153198.jpg";

const MainContent = () => {
  return (
    <section id="hero">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Left Item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            <u>Tech-Monks</u>
          </h1>
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left mt-0">
            Transform your technological journey with Tech-Monks.
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Fostering expertise, sparking innovation, and shaping solutions that
            redefine excellence.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="#"
              className="p-3 px-6 pt-2 text-white bg-brightYellow rounded-full baseline hover:bg-brightYellowLight"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt=""
            className="rounded-3xl border-4 border-solid border-brightYellow shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
