import React from "react";
import Link from 'react-router-dom/Link';

export default function PlayerNews(props) {

    const content = (
        <>
            {props.players.map(player => (
                <div className="col-12 col-md-6 col-lg-6 col-xl-4" key={player.id}>
                    <div className="item-listing-container-skrn player-profile">
                        <Link to={`/player/${player.id}`}><img src={`https://api.news.lmdfoot.com/${player.imageURL}`}  alt={player.fullname} /></Link>
                        <div className="item-listing-text-skrn item-listing-movie-casting">
                            <h6><Link to={`/player/${player.id}`}>{player.fullname}</Link></h6>
                            <div className="movie-casting-sub-title">{player.poste}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

    return (
        <div className="row">{content}</div>
    );
}