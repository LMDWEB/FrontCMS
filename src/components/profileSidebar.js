import React from "react";

export default function ProfileSidebar(props) {
	const content = (
		<div id="content-sidebar-pro">
			<div id="content-sidebar-info">
				<img src={`http://localhost:1337/${props.player.image.url}`} alt={props.player.fullname} />
				<div id="profile-sidebar-name">
					<h5>{props.player.fullname}</h5>
					<h6>{props.player.poste}</h6>
				</div>
				<div id="profile-sidebar-gradient"></div>
			</div>
			
			<div className="content-sidebar-section">
				<h3 className="content-sidebar-sub-header">Statistiques</h3>
				<ul id="profile-watched-stats">
					<li><span>43</span> Matchs</li>
					<li><span>28</span> Buts</li>
					<li><span>07</span> Passes décisives</li>
				</ul>
			</div>
			
			<div className="content-sidebar-section">
				<h3 className="content-sidebar-sub-header">Favorite Genres</h3>
				<ul id="profile-favorite-genres">
					<li>
						<img src="images/genres/comedy.png" alt="Comedy" />
					</li>
					<li>
						<img src="images/genres/action.png" alt="Action" />
					</li>
					<li>
						<img src="images/genres/romance.png" alt="Romance" />
					</li>
					<li>
						<img src="images/genres/fantasy.png" alt="Fantasy" />
					</li>
				</ul>
				<div className="clearfix"></div>
			</div>
			
			<div className="content-sidebar-section">
				<h3 className="content-sidebar-sub-header">Club</h3>
				<ul id="friends-activity-profiles">
					<li><a href="#!"><img src="images/demo/user-8.jpg" alt="Friend" /></a></li>
				</ul>
				<div className="clearfix"></div>
			</div>
		</div>
    );

    return (
        <>{content}</>
	);
}