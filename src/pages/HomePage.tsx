// import React from "react";
import ProfileImg from "../assets/images/ProfileImg.png";
import Resume from "../assets/files/Resume.pdf";
const HomePage = () => {
const skills = ["HTML5", "CSS", "JavaScript", "React", "SQL", "Python", "Tailwind CSS"];

// Repeat skills 3 times
const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <>
      <section className=" bg-[#000000] text-white  w-full sm:w-full">
        <div className="2xl:px-60 flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10 gap-10 md:gap-20 px-25 pd-25">
  {/* Text section */}
  <div className="text-center md:text-left">
    <h2 className="text-4xl text-white sm:max-lg:text-xl lg:max-xl:text-2xl font-bold">
      Hello <span className="text-orange-400 font-extrabold">.</span>
    </h2>
    <div className="flex items-center justify-center md:justify-start -ml-0 md:-ml-24 2xl:-ml-60">
      <div className="bg-black md:w-40 h-[2px] bg-orange-400 mr-4 mt-6 2xl:w-70 "></div>
      <h1 className="text-4xl my-[10px] sm:max-lg:text-2xl lg:max-xl:text-3xl">
        I'm <span className="text-orange-400 font-bold">Kowshika</span>
      </h1>
    </div>
    <h2 className="text-4xl text-white font-bold mb-15 sm:max-lg:text-xl lg:max-xl:text-2xl">Front-End Developer</h2>

    <div className=" flex justify-center md:justify-start gap-15 mb-8">
      <a
        href={Resume}
        download
        className="button-Home bg-orange-400 text-white md:py-3 px-4 font-medium text-base sm:text-sm md:text-sm lg:text-base rounded w-28">
        My Resume
      </a>
      <a
        href="https://www.linkedin.com/in/kowshika--k"
        target="_blank"
        className="button-Home border border-white text-white md:py-3 px-4 font-medium text-base sm:text-sm md:text-sm lg:text-base rounded w-22">
        LinkedIn
      </a>
    </div>
  </div>

  {/* Image */}
  <div className="flex justify-center md:justify-end w-full md:w-1/2">
    <img
      src={ProfileImg}
      alt="ProfileImage"
      className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain "
    />
  </div>
</div>


       <div className="skills-bar">
      <div className="skills-track">
        {repeatedSkills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
      </section>
    </>
  );
};
export default HomePage;
