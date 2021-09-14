import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import ComputerIcon from '@material-ui/icons/Computer';
import './welcomecontents.css';
import Sidebar from '../pages/sidebar/Sidebar';

function Welcomecontents () {
    
    return (
        <div className="page-items">
            <div className="page-item">
                <span className="page-title"> <ComputerIcon /> Welcome To The User Portal </span>
                <div className="welcomedetails-container">
                    <span className="welcomedetails">  Here, You Will Be Able To Post Announcements and Notices To Be Viewed On The Website 
                    <p> If You Have Any Qusetions, Please Visit The Help Page </p>
                    </span>
                    <span className="moredetails"> </span>
                </div>
            </div>

            <div className="page-item2">
                <span className="page-title"> <ErrorIcon className="error-icon"/> NOTE </span>
                <div className="welcomedetails-container">
                    <span className="welcomedetails"> Only 1 Announcement Is Allowed Per Student Per Day!
                    <p> Inappropriate Content Is Not Permitted On The Notice Board </p>
                    <p> Failure To Adhere To The Rules Of The Online Notice Board Will Lead To Immediate Termination Of Ones Account </p>
                    </span>
                    <span className="moredetails"> </span>
                </div>
            </div>
        </div>
    )
}

export default Welcomecontents;