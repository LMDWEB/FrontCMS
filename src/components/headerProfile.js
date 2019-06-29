import React from "react";
import Link from 'react-router-dom/Link';

export default class HeaderProfile extends React.Component {
    render() {

		const style = {
            maxHeight: 50
        }
        return (
		<>
			<div id="mobile-bars-icon-pro" className="noselect"></div>
			<div id="header-user-profile">
				<div id="header-user-profile-click" className="noselect">
				<img src="images/demo/whiteFingerprint.png" style={style}/><div id="header-username">Diego Waziri</div><i className="fas fa-angle-down"></i>
				</div>
				<div id="header-user-profile-menu">
					<ul>
						<li><Link to="/profile"><span className="icon-User"></span>My Profile</Link></li>
						<li><Link to="dashboard-account.html"><span className="icon-Gears"></span>Account Details</Link></li>
						<li><Link to="#!"><span className="icon-Life-Safer"></span>Help/Support</Link></li>
						<li><Link to="index.html"><span className="icon-Power-3"></span>Log Out</Link></li>
					</ul>
				</div>
			</div>
		</>
        )
    }
}