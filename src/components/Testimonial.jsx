import { Link } from "react-router-dom";

import avatarAnisha from "../assets/images/avatar-anisha.png";
import { testimonialsData } from "../assets/data/testimonialsData";

const Testimonial = () => {
  return (
    <section id="testimonials" className="mt-16">
      <div className="mx-auto container px-4">
        <h2 className="text-4xl font-bold">Hear from our customers</h2>
      </div>
      <div className="max-w-6xl px-5 mx-auto mt-16 text-center">
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {testimonialsData.map(({ id, image, content, name }) => {
            return (
              <div
                className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/4"
                key={id}
              >
                <img src={avatarAnisha} className="w-16 -mt-14" alt="" />
                <h5 className="text-lg font-bold">{name}</h5>
                <p className="text-sm text-darkGrayishBlue">{content}</p>
              </div>
            );
          })}
        </div>
        {/* Button */}
        <div className="my-16">
          <Link
            to="#"
            className="p-3 px-6 pt-2 text-white bg-brightYellow rounded-full baseline hover:bg-brightYellowLight"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
