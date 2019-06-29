import React from "react";
import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';

export default function ProfileContent(props) {
	

    const content = (
        <div id="col-main-with-sidebar">
			<div className="dashboard-container">
				<ul className="dashboard-sub-menu">
					<li className="current"><Link to="#!">Articles</Link></li>
					<li><Link to="#!">Effectifs</Link></li>
				</ul>

				<div class="row">
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-listing-container-skrn player-profile-avatar player-profile-avatar--firstTeam">
							<p class="player-profile-avatar__squad-number">9</p>
							<a href="dashboard-movie-profile.html"><img src="images/demo/thiago.png" alt="Listing"/></a>
							<div class="item-listing-text-skrn">
								<div class="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Thiago Silva</a></h6>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-listing-container-skrn player-profile-avatar player-profile-avatar--firstTeam">
						<p class="player-profile-avatar__squad-number">9</p>
							<a href="dashboard-movie-profile.html"><img src="images/demo/didi.png" alt="Listing"/></a>
							<div class="item-listing-text-skrn">
								<div class="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Angel Di Maria</a></h6>
								</div>
							</div>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-listing-container-skrn player-profile-avatar player-profile-avatar--firstTeam">
						<p class="player-profile-avatar__squad-number">9</p>
							<a href="dashboard-movie-profile.html"><img src="images/demo/cavani.png" alt="Listing"/></a>
							<div class="item-listing-text-skrn">
								<div class="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Edison Cavani</a></h6>
								</div>
							</div>
						</div>
					</div>
				</div>

				<ul className="page-numbers">
					<li><Link className="previous page-numbers" to="#!"><i className="fas fa-chevron-left"></i></Link></li>
					<li><span className="page-numbers current">1</span></li>
					<li><Link className="page-numbers" to="#!">2</Link></li>
					<li><Link className="page-numbers" to="#!">3</Link></li>
					<li><Link className="page-numbers" to="#!">4</Link></li>
					<li><Link className="next page-numbers" to="#!"><i className="fas fa-chevron-right"></i></Link></li>
				</ul>
			</div>
		</div>
    );

    return (
        <div className="col-12">
            <div className="row">
                {content}
            </div>
        </div>
    );
}