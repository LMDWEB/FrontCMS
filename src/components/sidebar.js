import React from "react";
import Link from 'react-router-dom/Link';

export default class Sidebar extends React.Component {
    render() {
        return (
            <nav id="sidebar-nav">
                <ul id="vertical-sidebar-nav" className="sf-menu">
                    <li className="normal-item-pro">
                        <Link to="/news">
                            <span className="fa fa-newspaper"></span>
                        Actualité
                        </Link>
                    </li>
                    <li className="normal-item-pro">
                        <Link to="/season">
                            <span className="far fa-futbol"></span>
                            Saison
                        </Link>
                    </li>
                    <li className="normal-item-pro">
                        <Link to="/club">
                            <span className="far fa-futbol"></span>
                            Club
                        </Link>
                    </li>
                    <li className="normal-item-pro">
                        <Link to="dashboard-new-arrivals.html">
                        <span className="far fa-calendar-alt"></span>
                        Championnat
                        </Link>
                    </li>
                    <li className="normal-item-pro">
                        <Link to="dashboard-coming-soon.html">
                            <span className="fa fa-comments"></span>
                        Evènements
                        </Link>
                    </li>
                    <li className="normal-item-pro">
                        <Link to="dashboard-coming-soon.html">
                            <span className="fa fa-comments"></span>
                        Forum
                        </Link>
                    </li>
                </ul>
                <div className="clearfix"></div>
            </nav>
        )
    }
}