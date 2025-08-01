// import React from "react";
import ProjectImg from "../assets/images/projectImg.png";
import ProjectImg1 from "../assets/images/ProjectImg1.png";

const Data = [
  {
    title: "Gaming Website",
    skills: ["HTML", "CSS"],
    description:
      "Created a gaming webpage with HTML, CSS, and JavaScript featuring interactive user experience, stunning visual design, and dynamic content integration",
    image:  ProjectImg ,
    github: (
      <a
        href="https://github.com/Kowshika29-K/Gaming-Website"
        target="_blank"
        className="bg-orange-400 text-white py-[12px] px-[20px] font-medium text-base no-underline text-[15px] rounded"
      >View GitHub</a>)
  },
  {
    title: "PVT",
    skills: ["Quality Assurance","React"],
    description:
      "A PVT Calculator analyzes reservoir fluid properties under different pressure and temperature conditions.It helps predict phase behavior, density, viscosity, and formation volume factor.The tool is essential for reservoir evaluation, production optimization, and enhanced oil recovery (EOR).It supports better decision-making in fluid processing, refining, and reservoir simulation.",
    image:  ProjectImg1 ,
    github: (
      <a
        href="https://github.com/Kowshika29-K/PVT-Calculator"
        target="_blank"
        className="bg-orange-400 text-white py-[12px] px-[20px] font-medium text-base no-underline text-[15px] rounded"
      >
        View Github
      </a>
    )
  },
];
const ProjectPage = () => {
  return (
    <>
      <section className="bg-[#000000] text-white px-25 pb-25 w-full">
        <h2 className="h2-heading text-4xl font-bold mb-4 text-center">
          Projects
        </h2>
        {/* project 1 */}
        {Data.map((project, index) => (
          <div key={index} className="flex justify-between items-start mt-20">
            <div className="mt-15 flex flex-col gap-5 ">
              <h3 className="text-2xl font-semibold projectName" >
                {project.title}
              </h3>
              <div className="flex gap-8 skillsList">
                {project.skills.map((skill_list, i) => (
                  <span key={i} className="skill-style">{skill_list}</span>
                ))}
              </div>
              <div className="flex w-[80%]">
                <p className="text-justify  ">
                  {project.description}
                </p>
              </div>

              <div className="button-Project flex gap-8">
                {project.github}
                {/* <a className="bg-transparent text-white py-[12px] px-[20px] font-medium text-base border border-white no-underline text-[15px] rounded ">
                View Project
              </a> */}
              </div>
            </div>
            <div className="project-images">
              <img alt="ProjectImage" src={project.image}/>
            </div>
          </div>
        ))}
 
        {/* <div className="flex justify-between items-start mt-20">
          <div className="mt-15 flex flex-col gap-5 ">
            <h3 className="text-2xl font-semibold projectName">Tasker</h3>
            <div className="flex gap-8 skillsList">
              <span className="skill-style">HTML</span>
              <span className="skill-style">CSS</span>
              <span className="skill-style">JavaScript</span>
            </div>
            <div className="flex w-[80%]">
              <p className="text-justify  ">
                Crafted a user-friendly to-do list website with HTML, CSS, and
                JavaScript, offering seamless task organization, customizable
                styling, and dynamic task updates.
              </p>
            </div>

            <div className="button-Project flex gap-8">
              <a
                href="https://github.com/Kowshika29-K/Tasker1"
                target="_blank"
                className="bg-orange-400 text-white py-[12px] px-[20px] font-medium text-base no-underline text-[15px] rounded "
              >
                View Github
              </a>
               <a className="bg-transparent text-white py-[12px] px-[20px] font-medium text-base border border-white no-underline text-[15px] rounded ">
                View Project
              </a> 
            </div>
          </div>
          <div className="project-images">
            <img src={ProjectImg1} className="projectImage2" />
          </div> 
        </div> */}
      </section>
    </>
  );
};
export default ProjectPage;
