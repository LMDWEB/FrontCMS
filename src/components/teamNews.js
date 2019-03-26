import React from "react";
import Link from 'react-router-dom/Link';

export default function TeamNews(props) {
    const content = (
        <>
            {props.teams.map(team => (
                <div className="col-12 col-md-6 col-lg-6 col-xl-4" key={team.id}>
                    <div className="item-listing-container-skrn player-profile">
                        <Link to="/profile"><img src={`http://localhost:1337/${team.imageURL}`} alt={team.name} /></Link>
                        <div className="item-listing-text-skrn item-listing-movie-casting">
                            <h6><Link to="/profile">{team.name}</Link></h6>
                            <div className="movie-casting-sub-title">{team.sexe}</div>
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