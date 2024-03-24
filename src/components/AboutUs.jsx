import { aboutUsData } from "../assets/data/aboutUsData";

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="mx-auto container px-4">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          About us
        </h2>
        <div className="flex gap-8">
          {aboutUsData.map((data) => {
            return (
              <div>
                <h3 className="text-base font-bold md:mb-4 md:mt-4">
                  {data.title}
                </h3>
                <p className="text-darkGrayishBlue">{data.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
