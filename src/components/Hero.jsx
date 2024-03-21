import { Link } from "react-router-dom";

import heroImage from "../assets/images/pexels-canva-studio-3153198.jpg";

const Hero = () => {
  return (
    <section id="hero">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Left Item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            <u>Tech-Monks</u>
            <br></br> Business idea in mind - connect with us.
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
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
            style={{
              borderRadius: "200px",
              border: "5px solid rgb(247, 174, 28)",
              boxShadow: "0px 5px 5px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
