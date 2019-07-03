import React from "react";
import Link from 'react-router-dom/Link';

export default class HeaderNav extends React.Component {
    render() {
        return (
            <nav id="mobile-navigation-pro">
                <ul id="mobile-menu-pro">
                    <li>
                        <Link to="/club">
                            <span className="icon-Old-TV"></span>
                            Club
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendrier">
                            <span className="icon-Reel"></span>
                            Calendrier
                        </Link>
                    </li>
                    <li>
                        <Link to="/news">
                                <span className="icon-Movie"></span>
                            Actualités
                        </Link>
                    </li>
                    <li>
                        <Link to="/videos">
                            <span className="icon-Movie-Ticket"></span>
                            Vidéos
                        </Link>
                    </li>
                    <li>
                        <Link to="#!">
                            <i className="far fa-bell"></i>
                            <span className="user-notification-count">3</span>
                            Notifications
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}