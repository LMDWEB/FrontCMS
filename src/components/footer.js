import React from "react";
import Link from 'react-router-dom/Link';

export default class Footer extends React.Component {

    render() {
        return (
            <footer id="footer-pro">
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <div className="copyright-text-pro">&copy; Copyright 2019 Le Meilleur du PSG.</div>
                        </div>
                        <div className="col-md">
                            <ul className="social-icons-pro">
                                <li className="facebook-color"><Link to="http://facebook.com/progressionstudios" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                <li className="twitter-color"><Link to="http://twitter.com/Progression_S" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                <li className="youtube-color"><Link to="http://youtube.com" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                <li className="vimeo-color"><Link to="http://vimeo.com" target="_blank"><i className="fab fa-vimeo-v"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}