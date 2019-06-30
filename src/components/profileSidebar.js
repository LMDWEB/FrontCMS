import React from "react";

export default function ProfileSidebar(props) {
	const content = (
		<div id="content-sidebar-pro">
			<div id="content-sidebar-info">
				<div id="profile-sidebar-gradient">
				{ props.firstname }</div>
			</div>
			
			<div className="content-sidebar-section">
			<img src="images/demo/avatar.png"/>
				<h3 className="content-sidebar-sub-header">Profile</h3>
				<ul id="profile-watched-stats">
					<li><span>43</span> Post</li>
					<li><span>28</span> Commentaire</li>
				</ul>
			</div>
		</div>
    );

    return (
        <>{content}</>
	);
}