import React from "react";

export default class NewsSidebar extends React.Component {

    render() {
        return (
			<div id="content-sidebar-pro">			
				<div className="content-sidebar-section">
					<ul className="progression-studios-slider-rating">
						<li>Pro</li>
						<li>Transfert</li>
					</ul>
				</div>
				
				<div className="content-sidebar-section">
					<h4 className="content-sidebar-sub-header">Date de publication</h4>
					<div className="content-sidebar-short-description">2 October, 2017 à 12h34</div>
				</div>
				
				<div className="content-sidebar-section">
					<h4 className="content-sidebar-sub-header">Nombre de vues</h4>
					<div className="content-sidebar-short-description">2130</div>
				</div>
				
				<div className="content-sidebar-section">
					<h4 className="content-sidebar-sub-header">Auteur</h4>
					<div className="content-sidebar-short-description">James Wan</div>
				</div>
			</div>
        )
    }
}