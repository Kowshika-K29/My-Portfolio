// import React from "react";
import { useNavigate } from "react-router";
// import HamburgerIcon from "../../assets/icons/hamburger-icon.png";
const Header = () =>{
    const navigate = useNavigate();
    
    return(
    <>
    <header className="2xl:px-60 flex justify-between items-center px-25 py-5 bg-[#1a1a1a] text-white w-full sm:w-full">
        <div className="text-2xl font-bold text-white sm:max-md:text-sm ">Kowshika Karuppusamy</div>
        <nav>
            <ul className="header-menu sm:max-md:text-sm" >
                <li><a onClick={()=>navigate('/')}>Home</a></li>
                <li><a onClick={()=>navigate('/AboutPage')}>About</a></li>
                <li><a onClick={()=>navigate('/ProjetPage')}>Projects</a></li>
                <li><a onClick={()=>navigate('/ContactPage')}>Contact</a></li>
            </ul>
        </nav>
    </header>
    </>
    );
}
export default Header;
