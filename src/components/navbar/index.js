import React, {useState} from "react";

import 'remixicon/fonts/remixicon.css'
import {ReactComponent as LogoSVG} from './navbar.svg'
import {Link , BrowserRouter as Router} from "react-router-dom";

import "./navbar.scss"


const Navbar = () => {


    const [LogoHover, setLogoHover] = useState(false)
    return (
        <Router>
            <nav className="w-full flex lg:flex-row md:flex-col sm:flex-col flex-col justify-evenly items-center" id="header">
                <div className="lg:w-2/12 md:w-full sm:w-full w-full flex justify-center mt-5 ml-5">
                    <img src="./img/navbar-logo/navbar-logo.png" alt="ah-logo" className="w-1/2" style={{width:"200px" , height:"100px"}}/>
                </div>


                <ul className="lg:w-6/12 md:w-full sm:w-full w-full lg:flex-row md:flex-col sm:flex-col flex-col flex lg:justify-evenly md:justify-center sm:justify-center justify-center">
                    <li className="text-center mt-5"><Link to="/#"> <i className="ri-home-7-line relative top-0.5"/> Home </Link></li>
                    <li className="text-center mt-5"><Link to="/#"> <i className="ri-customer-service-line relative top-0.5"/> Services </Link></li>
                    <li className="text-center mt-5"><Link to="/#"> <i className="ri-shopping-bag-3-line relative top-0.5"/> Products </Link></li>
                    <li className="text-center mt-5"><Link to="/#"> <i className="ri-information-line relative top-0.5"/> About US </Link></li>
                    <li className="text-center mt-5"><Link to="/#"> <i className="ri-contacts-line relative top-0.5"/> Contact Us </Link></li>
                </ul>


                <div className="w-2/12 md:w-full sm:w-full w-full flex justify-center px-10">
                    <button
                        onMouseEnter={() => setLogoHover(true)}
                        onMouseLeave={() => setLogoHover(false)}
                        className="flex mt-3 bg-gray-800 hover:bg-blue-900 transition duration-300 bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded lg:justify-between items-center w-full flex md:justify-center sm:justify-center justify-center">
                        {
                            LogoHover === true ?
                                <img src="./img/navbar-logo/logo.gif" alt="ah-logo" style={{height: '40px'}}/>
                                :
                                <LogoSVG style={{height: '40px'}}/>
                        }
                        <span className="ml-2">
                         your card
                    </span>
                    </button>
                </div>

            </nav>
        </Router>
    )
}


export default Navbar