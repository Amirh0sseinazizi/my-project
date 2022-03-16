import React, {useState} from "react";


import {ReactComponent as LogoSVG} from '../navbar.svg'


const NavbarLG = () => {


    const [LogoHover, setLogoHover] = useState(false)
    return (
        <nav className="w-full flex justify-evenly items-center">
            <div className="w-2/12">
                <img src="./img/navbar-logo/navbar-logo.png" alt="ah-logo" className="w-1/2"/>
            </div>


            <ul className="w-8/12 flex justify-evenly">
                <li>Home</li>
                <li>Services</li>
                <li>Products</li>
                <li>About US</li>
                <li>Contact Us</li>
            </ul>


            <div className="w-2/12">
                <button onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)}
                        className="flex mt-3 bg-gray-800 hover:bg-blue-900 transition duration-300 bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded justify-between items-center">
                    {
                        LogoHover === true ?
                            <img src="./img/navbar-logo/logo.gif" style={{height: '40px'}}/>
                            :
                            <LogoSVG style={{height: '40px'}}/>
                    }
                    <span className="ml-2">
                         your card
                    </span>
                </button>
            </div>

        </nav>
    )
}


export default NavbarLG