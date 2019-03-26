import React from "react";
import Link from 'react-router-dom/Link';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default class CategoryNews extends React.Component {
    render() {
        var article = {title:"John", description:"Doe"};

        const imgBack = {
           backgroundImage: "url(https://i.eurosport.com/2019/03/05/2537438-52647470-2560-1440.jpg?w=1050)"
        }

        const imgBack2 = {
            backgroundImage: "url(http://www.footmercato.net/images/a/dusan-tadic-peut-savourer-apres-son-recital-face-au-real-madrid_249289.jpeg)"
        }
        return (


            <div className="flexslider progression-studios-dashboard-slider">
              <ul className="slides">
                    <li className="progression_studios_animate_left">
                        <div className="progression-studios-slider-dashboard-image-background" style={imgBack}>
                            <div className="progression-studios-slider-display-table">
                                <div className="progression-studios-slider-vertical-align">
                                    <div className="container">
                                        <div className="progression-studios-slider-dashboard-caption-width">
                                            <div className="progression-studios-slider-caption-align">
                                                <h2><Link to="dashboard-movie-profile.html">Seven Days in Ibiza</Link></h2>
                                                <p className="progression-studios-slider-description">A sex columnist, Carrie Bradshaw, and her three friends Samantha, Charlotte 
                                                and Miranda explore  Manhattan's dating scene, chronicling the mating habits of 
                                                single New Yorkers.</p>

                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="progression-studios-slider-mobile-background-cover"></div>
                        </div>
                    </li>
                    <li className="progression_studios_animate_left">
                        <div className="progression-studios-slider-dashboard-image-background" style={imgBack2}>
                            <div className="progression-studios-slider-display-table">
                                <div className="progression-studios-slider-vertical-align">
                                    <div className="container">
                                        <div className="progression-studios-slider-dashboard-caption-width">
                                            <div className="progression-studios-slider-caption-align">
                                                <h2><Link to="dashboard-movie-profile.html">Seven Days in Ibiza</Link></h2>
                                                <p className="progression-studios-slider-description">A sex columnist, Carrie Bradshaw, and her three friends Samantha, Charlotte 
                                                and Miranda explore  Manhattan's dating scene, chronicling the mating habits of 
                                                single New Yorkers.</p>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="progression-studios-slider-mobile-background-cover"></div>
                        </div>
                    </li>
                </ul>
            </div>
        
            )
    }
}