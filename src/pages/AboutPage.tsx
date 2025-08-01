// import React from "react";
import WebImg from "../assets/images/webImg.png";
import SoftwareImg from "../assets/images/softwareImg.png";
import WebsiteImg from "../assets/images/websiteImg.png";
const AboutPage = () => {
  return (
    <>
      <section className="bg-black text-white px-25 pt-25 pb-25 w-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-20">
            <div className="skill-set">
              <img src={WebImg} alt="" className="w-14 h-9" />
              <span className="skill-name">Website Development</span>
            </div>
            <div className="skill-set">
              <img src={SoftwareImg} alt="" className="w-15 h-9" />
              <span className="skill-name">App Development</span>
            </div>
            <div className="skill-set">
              <img src={WebsiteImg} alt="" className="w-15 h-9" />
              <span className="skill-name">Website Hosting</span>
            </div>
          </div>

          <div className="w-1/2">
            <h2 className=" h2-heading text-4xl font-bold mb-4">About me</h2>
            <p className="project-status text-justify">
              Proficient in core web technologies including Python, HTML, CSS,
              JavaScript, and SQL. Hands-on experience in design and content
              creation using Webflow and Canva. Adaptive and fast-learning
              professional with 3 months of hands-on experience in manual
              software testing.
            </p>

            <div className="flex justify-between mt-8">
              <div>
                <h3 className="projects">
                  2<span className="projects-count">+</span>
                </h3>
                <p className="project-status">
                  Completed <br /> Projects
                </p>
              </div>
             <div>
                <h3 className="projects">
                  6<span className="projects-count">+</span>
                </h3>
                <p  className="project-status">Expertise in<br/>Skills</p>
              </div>
              <div>
                <h3 className="projects">
                  3<span className="projects-count">+</span>
                </h3>
                <p  className="project-status">Months of <br/>experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutPage;
