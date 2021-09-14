import React, { useState } from 'react';
import './topBar.css';
import logo from '../logo/logocolor.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import MessageIcon from '@material-ui/icons/Message';
import CreateIcon from '@material-ui/icons/Create';



function TopBar () {
    
const [nav, setnav] = useState(false);

const changeBackground = () => {
    if(window.scrollY >= 50) {
        setnav(true);
    }
    else {
        setnav(false);
    }
}


window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>

            <a href="#" className="logo">
                <img src={logo} alt="not available" />
            </a>
        
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"> </span>
            </label>

            <ul className="menu">
                <li> <a href="/"> Home </a></li>
                <li> <a href="/recent"> Recent Announcements </a></li>
                <li> <a href="/viewevents"> Upcoming Events </a></li>
                <li> <a href="/loginchoice"> Post Announcement / Events </a></li>
            </ul>
        </nav>
    )
}

export default TopBar;