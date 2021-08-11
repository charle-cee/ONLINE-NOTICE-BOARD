import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"
import { headerinfo } from "./headerinfo";
import "./main.css"


function Header ()  {
    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sideBar);

    return(
        <div className="header">
            <>
            <div className="navBar">
            <Link to="#" className="menuBars">
            <FaBars onClick={showSideBar} />
            </Link>
            </div> 

            <nav className={sideBar ? 'nav-menu active' : 'nav-menu'} >
                <ul className="navBar-items" onClick={showSideBar}>
                    <li className="navBar-toggle">
                        <Link to="#" className="menuBars">
                            <AiOutlineClose />
                        </Link>
                    </li>
                    {headerinfo.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span> {item.title} </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
          

            </>
        </div>
    );
}

export default Header;