import React from "react";
import Link from 'react-router-dom/Link';
import Search from "./search";
import HeaderProfile from "./headerProfile";
import HeaderNotifcation from "./headerNotification";
import HeaderNav from "./headerNav";
import logo from '../logo.png';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Header extends React.Component {

    render() {
        const style = {
            maxHeight: 70
        }

        return (
            // <header id="videohead-pro" className="sticky-header">
            //     <div id="video-logo-background">
            //         <Link to="/">
            //             <img src={logo} alt="Logo" style={style} />
            //         </Link>
            //     </div>
            //     <Search />
            //     <HeaderProfile />
            //     <HeaderNotifcation />
            //     <div className="clearfix"></div>
            //     <HeaderNav />
            // </header>

            <>
                <header id="videohead-pro" className="sticky-header fixed-top">
                    <Navbar bg="light" variant="light">
                        <Nav className="mr-auto">
                            <Link to="/home"><img src={logo} alt="Logo" style={style} /></Link>
                            <Nav.Link href="/club" >Club</Nav.Link>
                            <Nav.Link href="#features">Calendrier</Nav.Link>
                            <Nav.Link href="/news">Actualités</Nav.Link>
                            <Nav.Link href="#pricing">Vidéos</Nav.Link>
                        </Nav>
                        <HeaderProfile />
                        <HeaderNotifcation />
                        <div className="clearfix"></div>
                        <HeaderNav />
                    </Navbar>
                </header>
            </>
        )
    }
}