import React from "react";
import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';
import TabsClub from "./TabsClub";

export default function ClubProfileContainerSideContent(props) {
	

    const content = (
        <div id="col-main-with-sidebar">
			<div className="dashboard-container">
				{/* <ul className="dashboard-sub-menu">
					<li className="current"><Link to="#!">Articles</Link></li>
					<li><Link to="#!">Effectifs</Link></li>
					<li><Link to="#!">Calendrier</Link></li>
					<li><Link to="#!">Classement</Link></li>
					<li><Link to="#!">Palmarès</Link></li>
					<li><Link to="#!">Vidéos</Link></li>
				</ul> */}
				<TabsClub/>
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