import { useState } from "react";
import { Link } from "react-router-dom";
import YellowLeaf from "../assets/images/yellow_autumn_leaf.png";

import companyLogo from "../assets/images/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="relative">
      <div className="absolute custom-image-container">
        <img src={YellowLeaf} alt="" className="custom-image" />
      </div>
      <nav className="relative container mx-auto p-6">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <h3 className="text-base font-bold md:mb-4 md:mt-4">Tech-Monks</h3>
            {/* <img src={companyLogo} alt="" /> */}
          </div>
          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <Link to="#" className="hover:text-darkGrayishBlue">
              Home
            </Link>
            <Link to="#" className="hover:text-darkGrayishBlue">
              Services
            </Link>
            <Link to="#" className="hover:text-darkGrayishBlue">
              About Us
            </Link>
            <Link to="#" className="hover:text-darkGrayishBlue">
              Careers
            </Link>
            <Link to="#" className="hover:text-darkGrayishBlue">
              Contact us
            </Link>
          </div>
          {/* Button */}
          <Link
            to="#"
            className="hidden p-3 px-6 pt-2 text-white bg-brightYellow rounded-full baseline hover:bg-brightYellowLight md:block"
          >
            Get Started
          </Link>

          {/* Hamburger Icon */}
          <button
            className={
              toggleMenu
                ? "open block hamburger md:hidden focus:outline-none"
                : "block hamburger md:hidden focus:outline-none"
            }
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            className={
              toggleMenu
                ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            }
          >
            <Link to="#">Pricing</Link>
            <Link to="#">Product</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Community</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
