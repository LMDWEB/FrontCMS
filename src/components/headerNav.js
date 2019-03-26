import React from "react";
import Link from 'react-router-dom/Link';

export default class HeaderNav extends React.Component {
    render() {
        return (
            <nav id="mobile-navigation-pro">
                <ul id="mobile-menu-pro">
                    <li>
                        <Link to="/news">
                            <span className="icon-Old-TV"></span>
                            Actualité
                        </Link>
                    </li>
                    <li>
                        <Link to="dashboard-movies.html">
                            <span className="icon-Reel"></span>
                            Saison
                        </Link>
                    </li>
                    <li>
                        <Link to="dashboard-playlists.html">
                                <span className="icon-Movie"></span>
                            Club
                        </Link>
                    </li>
                    <li>
                        <Link to="dashboard-new-arrivals.html">
                            <span className="icon-Movie-Ticket"></span>
                            Evenements
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
                <div className="clearfix"></div>
                <div id="search-mobile-nav-pro">
                    <input type="text" placeholder="Search for Movies or TV Series" aria-label="Search" />
                </div>
            </nav>
        )
    }
}