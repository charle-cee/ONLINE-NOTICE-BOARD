import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { Home } from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';
import HelpOutlineIcon from '@material-ui/icons/Help';
import PowerSettingsNewIcon  from '@material-ui/icons/PowerSettingsNew';
import EventIcon from '@material-ui/icons/Event';


function Sidebar () {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title"> DashBoard </h3>
                    <ul className="sidebar-list">

                        <Link to="/welcome" className="link">
                        <li className="sidebar-listitem">
                            <Home className="sidebar-icon" />
                            User Portal 
                        </li>
                        </Link>

                        <Link to="/create" className="link">
                        <li className="sidebar-listitem">
                            <CreateIcon className="sidebar-icon" />
                            Create Announcement
                        </li>
                        </Link>

                        
                        <Link to="/events" className="link">
                        <li className="sidebar-listitem">
                            <EventIcon className="sidebar-icon" />
                            Create Event 
                        </li>
                        </Link>


                        <Link to="/help" className="link">
                        <li className="sidebar-listitem">
                            <HelpOutlineIcon className="sidebar-icon" />
                            Help
                        </li>
                        </Link>

                        <Link to="/welcome" className="link">
                        <li className="sidebar-listitem">
                            <PowerSettingsNewIcon className="sidebar-icon" />
                            Log Out
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;