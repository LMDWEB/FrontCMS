import React from "react";
import Link from 'react-router-dom/Link';
import Row from "react-bootstrap/Row";

export default class Footer extends React.Component {

    render() {
        return (
            <footer id="footer-pro fixed-bottom">
                <div className="container-fluid">
                    
                    <Row id="sponsor-bar">
                        <div class="footer-sponsors footer-sponsors--primary ml-auto mr-auto">
                            <ul>
                            <li>
                                <a class="js-trackLink" href="https://www.nike.com" target="_blank" rel="nofollow" data-tracking-category="Footer Sponsor" data-tracking-action="Click" data-tracking-label="/media/14938/nike.png">
                                <img class="no-src u-blur-up lazyloaded" src="/images/demo/nike.png" alt="logo-nike" />
                                </a>
                            </li>
                            <li>
                                <a class="js-trackLink" href="https://all.accor.com" target="_blank" rel="nofollow" data-tracking-category="Footer Sponsor" data-tracking-action="Click" data-tracking-label="/media/27041/all.png">
                                <img class="no-src u-blur-up lazyloaded" src="/images/demo/all.png" alt="all"/>
                                </a>
                            </li>
                            <li>
                                <a class="js-trackLink" href="http://ooredoo.com" target="_blank" rel="nofollow" data-tracking-category="Footer Sponsor" data-tracking-action="Click" data-tracking-label="/media/14939/ooredoo.png">
                                <img class="no-src u-blur-up lazyloaded" src="/images/demo/ooredoo.png" alt="logo-ooredoo" />
                                </a>
                            </li>
                            <li>
                                <a class="js-trackLink" href="https://www.qnb.com/cs/Satellite/QNBFrance/en_FR/enHome" target="_blank" rel="nofollow" data-tracking-category="Footer Sponsor" data-tracking-action="Click" data-tracking-label="/media/14941/qnb.png">
                                <img class="no-src u-blur-up lazyloaded" src="/images/demo/qnb.png" alt="logo-qnb" />
                                </a>
                            </li>
                            </ul>
                        </div>
                    </Row>
                        
                    <Row id="lower-footer">
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
                    </Row>
                
                </div>
            </footer>
        )
    }
}