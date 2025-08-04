// import React from "react";
const Header = () =>{
    return(
    <>
    <header className="sticky top-0 z-1 2xl:px-60 flex justify-between items-center px-25 py-5 bg-[#1a1a1a] text-white w-full sm:w-full">
        <div className="text-2xl font-bold text-white sm:max-md:text-sm ">Kowshika Karuppusamy</div>
        <nav>
            <ul className="header-menu sm:max-md:text-sm" >
                <li><a href="/">Home</a></li>
                <li><a  href="#AboutPage">About</a></li>
                <li><a  href="#ProjectPage">Projects</a></li>
                <li><a  href="#ContactPage">Contact</a></li>
            </ul>
        </nav>
    </header>
    </>
    );
}
export default Header;


