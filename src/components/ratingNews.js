import React from "react";
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Rating from 'react-rating';

export default class RatingNews extends React.Component {
    render() {
      const percentage = 66;

        return (
            <div id="movie-detail-rating">
                <div className="dashboard-container">
                    <div className="row">
                        <div className="col-sm">
                            <h5>Note</h5>
                            <div className="rating-pro">
                              <Rating emptySymbol="far fa-star" fullSymbol="fas fa-star" />
                            </div>
                            
                        </div>
                        <div className="col-sm">
                            <h6>Note moyenne</h6>
                              <CircularProgressbar
                                percentage={percentage}
                                text={`${percentage}%`}
                              />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}