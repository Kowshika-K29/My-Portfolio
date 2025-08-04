// import React from "react";
import githubIcon from "../../assets/icons/social-media/github-icon.png";
import mailIcon from "../../assets/icons/social-media/mail-icon.png";
import linkedinIcon from "../../assets/icons/social-media/linkedin-icon.png";

const Footer = () =>{
    return(
    <>
    <footer  className="2xl:px-60 p-[15px] bg-[#1a1a1a] text-center text-white w-full">
    <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-2xl ">Kowshika Karuppusamy</h1>
        <p className="text-lg">Designed with passion towards developing!</p>
        <div className="flex justify-center gap-3">
            <div className="footer-icons gap-3">
               <a href="https://github.com/Kowshika-K29" target="_blank"><img src={githubIcon} alt="github"/></a> 
                <a href="mailto:kowshika29.k@gamil.com" target="_blank"><img src={mailIcon} alt="mail"/></a> 
                 <a href="https://www.linkedin.com/in/kowshika--k" target="_blank"><img src={linkedinIcon} alt="linkedin"/></a>
            </div>
        </div>
    </div>
    </footer>
    </>
    
    );
}
export default Footer;
// fixed bottom-0 h-40 