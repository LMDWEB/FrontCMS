import React from "react";
import Link from 'react-router-dom/Link';

export default function ProfileContent(props) {

    const content = (
        <div id="col-main-with-sidebar">
			<div className="dashboard-container">
				<ul className="dashboard-sub-menu">
					<li className="current"><Link to="#!">Articles</Link></li>
					<li><Link to="#!">Commentaires</Link></li>
					<li><Link to="#!">Carrière</Link></li>
					<li><Link to="#!">Palmarès</Link></li>
					<li><Link to="#!">Vidéos</Link></li>
				</ul>

				<div className="row">
					<div className="col-12 col-md-6 col-lg-6 col-xl-12">
						
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