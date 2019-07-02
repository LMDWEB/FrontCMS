import React from "react";

export default function PlayerSidebar(props) {
	const content = (
		<div id="content-sidebar-pro">
			<div id="content-sidebar-info">
				<div id="profile-sidebar-gradient"></div>
			</div>
			
			<div className="content-sidebar-section">
			<img src="images/demo/cavanii.png"/>
				<h3 className="content-sidebar-sub-header">Edison Cavani</h3>
				<ul id="profile-watched-stats">
					<li><span>9</span> Numéro</li>
				</ul>
			</div>
			<div className="infos-club">
				<span>Poste | Milieux</span>
			</div>
			
		</div>
    );

    return (
        <>{content}</>
	);
}