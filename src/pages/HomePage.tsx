// import React from "react";
import ProfileImg from "../assets/images/ProfileImg.png";
import { useNavigate } from "react-router";

const HomePage = () => {
   const navigate = useNavigate();
  return (
    <>
      <section className="bg-[#000000] text-white  w-full">
        <div className="flex items-center gap-60 px-25 py-10 ">
          <div>
            <h2 className="text-4xl text-white">
              Hello <span className="text-orange-400 font-extrabold">.</span>
            </h2>
            <div className="flex items-center -ml-24">
            <div className="w-40 h-[2px] bg-orange-400 mr-4 mt-6"></div>
            <h1 className="text-4xl my-[10px] ">
              I'm <span className="text-orange-400 font-bold">Kowshika</span>
            </h1>
            </div>
            <h2 className="text-5xl text-white font-bold mb-25">
              Front-End Developer
            </h2>

            <div className="button-Home mb-8 flex gap-8">
              <a onClick={()=>navigate('/ProjectPage')} target="_blank" className="bg-orange-400 text-white py-[12px] px-[20px] font-medium text-base no-underline text-[15px] ">
                My projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="bg-transparent text-white py-[12px] px-[20px] font-medium text-base border border-white no-underline text-[15px]">
                My Resume
              </a>
            </div>
          </div>
          <div><img src={ProfileImg} alt="ProfileImage" className="w-100 h-100"></img></div>
        </div>

        <div className="skills-bar">
          <div className="skills-track">
            <span>HTML5</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>SQL</span>
            <span>Python</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
