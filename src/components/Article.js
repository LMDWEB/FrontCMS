import React from "react";
import RatingNews from "./ratingNews";
import Comments from "./comments";
import Link from 'react-router-dom/Link';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, post: {}}
      }
    
      async componentDidMount() {
        let data = await fetch(`https://api.news.lmdfoot.com/articles/${this.props.match.params.id}`);

        this.setState({
          loading: false,
          post: data,
        })
    }
    
    render() {
        if (!this.state.loading) {
            return (
                <main id="col-main-with-sidebar">
                    <RatingNews />
                    <div className="dashboard-container">
                    <h2>{this.state.post.title}</h2>
                    </div>
                    <div className="dashboard-container">
                        <div className="movie-details-section">
                            <strong>{this.state.post.resume}</strong>
                            <p>{this.state.post.content}</p>
                        </div>
                        <div className="movie-details-section">
                            <div className="row">
                                {this.state.post.players.map(player => (
                                    <div className="col-12 col-md-6 col-lg-6 col-xl-4" key={player.id}>
                                        <div className="item-listing-container-skrn player-profile">
                                            <Link to="/profile"><img src={player.image.url} alt="Cast" /></Link>
                                            <div className="item-listing-text-skrn item-listing-movie-casting">
                                                <h6><Link to="/profile">{player.fullname}</Link></h6>
                                                <div className="movie-casting-sub-title">{player.poste}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Comments />
                            </div>
                        </div>
                    </div>
                </main>
            );
          }
      
        return (<h2>Waiting for API...</h2>);
    }
}