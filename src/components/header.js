import React from "react";
import Link from 'react-router-dom/Link';
import Search from "./search";
import HeaderProfile from "./headerProfile";
import HeaderNotifcation from "./headerNotification";
import HeaderNav from "./headerNav";
import logo from '../logo.png';

export default class Header extends React.Component {

    render() {
        const style = {
            maxHeight: 50
        }

        return (
            <header id="videohead-pro" className="sticky-header">
                <div id="video-logo-background">
                    <Link to="/">
                        <img src={logo} alt="Logo" style={style} />
                    </Link>
                </div>
                <Search />
                <HeaderProfile />
                <HeaderNotifcation />
                <div className="clearfix"></div>
                <HeaderNav />
            </header>
        )
    }
}