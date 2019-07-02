import React from "react";

export default function ClubProfileSidebar(props) {
	const content = (
		<div id="content-sidebar-pro">
			<div id="content-sidebar-info">
				<div id="profile-sidebar-gradient"></div>
			</div>
			
			<div className="content-sidebar-section">
			<img src="images/demo/psg.png"/>
				<h3 className="content-sidebar-sub-header">Paris-Saint-Germain</h3>
				<ul id="profile-watched-stats">
					<li><span>43</span> Matchs</li>
					<li><span>28</span> Buts</li>
					<li><span>07</span> Passes décisives</li>
				</ul>
			</div>
			<div className="infos-club">
				<span>Année de Création | 1970</span>
				<span>Stade | Parc des Princes</span>
				<span>Capacité | 42 000</span>
			</div>
			
		</div>
    );

    return (
        <>{content}</>
	);
}