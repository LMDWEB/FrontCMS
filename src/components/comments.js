import React from "react";
import Link from 'react-router-dom/Link';

export default class Comments extends React.Component {
    render() {
        return (
            <>
                <h2>Commentaires</h2>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-12">
                        <div className="item-listing-container-skrn comments">
                            <div className="profile">
                                <div className="profile-user">
                                    <Link className="photo-user" to="/profile"><img src="https://www.sofoot.com/IMG/joueurs/presnel-kimpembe-218649.jpg" alt="Cast" /></Link>
                                    <div className="info-user">
                                        <span className="pseudo"><Link to="/profile">DiegoWaz</Link></span>
                                        <span className="role">Administateur</span>
                                    </div>
                                </div>
                                <div className="profile-info">
                                    <span className="date"><i className="far fa-clock"></i> 21 octobre, 21h34</span>
                                </div>
                            </div>
                            <div className="comment">
                                <p>test</p>
                            </div>
                            <div className="actions">
                                <div className="like">
                                    <i className="fa fa-thumbs-up"></i> J'aime
                                </div>
                                <div className="coms">
                                    <i className="fa fa-comment"></i> Commentez
                                </div>
                                <div className="share">
                                <i className="fa fa-share"></i> Partager
                                </div>
                            </div>
                            <div className="replycomments">
                                <div className="profile">
                                    <div className="profile-user">
                                        <Link className="photo-user" to="/profile"><img src="https://www.sofoot.com/IMG/joueurs/presnel-kimpembe-218649.jpg" alt="Cast" /></Link>
                                        <div className="info-user">
                                            <span className="pseudo"><Link to="/profile">DiegoWaz</Link></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment">
                                    <p>test</p>
                                    <span className="date">21 octobre, 21h34</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}