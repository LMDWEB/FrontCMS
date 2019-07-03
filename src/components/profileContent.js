import React from "react";
import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';
import ListNews from "../components/listNews";


export default function ProfileContent(props) {
	

    const content = (
        <div id="col-main-with-sidebar">
			<div className="dashboard-container">
				<div class="row display-team ">
				
					<ListNews/>

				</div>

				<div class="row display-team ">	
					<h3>Joueur liés à l'article</h3>
					
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-listing-container-skrn player-profile-avatar player-profile-avatar--firstTeam">
							
							<a href="dashboard-movie-profile.html"><img src="images/demo/thiago.png" alt="Listing"/></a>
							<div class="item-listing-text-skrn">
								<div class="item-listing-text-skrn-vertical-align"><h6><a href="dashboard-movie-profile.html">Thiago Silva</a></h6>
								</div>
							</div>
						</div>
					</div>
				</div>

				
			
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