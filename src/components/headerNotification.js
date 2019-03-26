import React from "react";
import Link from "react-router-dom/Link";

export default class HeaderNotifcation extends React.Component {
    render() {
        return (
            <div id="header-user-notification">
                <div id="header-user-notification-click" className="noselect">
                    <i className="far fa-bell"></i>
                    <span className="user-notification-count">3</span>
                </div>
                <div id="header-user-notification-menu">
                    <h3>Notifications</h3>
                    <div id="header-notification-menu-padding">
                        <ul id="header-user-notification-list">
                            <li>
                                <Link to="#!">
                                    <img src="images/demo/user-profile-2.jpg" alt="Profile" />Lorem ipsum dolor sit amet, consec tetur adipiscing elit. <div className="header-user-notify-time">21 hours ago</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#!">
                                    <img src="images/demo/user-profile-3.jpg" alt="Profile" />Donec vitae lacus id arcu molestie mollis. <div className="header-user-notify-time">3 days ago</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#!">
                                    <img src="images/demo/user-profile-4.jpg" alt="Profile" />Aenean vitae lectus non purus facilisis imperdiet. <div className="header-user-notify-time">5 days ago</div>
                                </Link>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }
}