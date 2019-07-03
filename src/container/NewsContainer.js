import React from "react";
import PlayerNews from "../components/playerNews";
import RatingNews from "../components/ratingNews";
import Comments from "../components/comments";
import Link from "react-router-dom/Link";
import TeamNews from "../components/teamNews";

export default class NewsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            post: [],
            category: "",
            user: "",
            image: "",
            players: [],
            teams: []
        }
      }
      
      async componentDidMount() {
        let response = await fetch(`https://api.news.lmdfoot.com/articles/${this.props.match.params.id}`);
        let data = await response.json();

        this.setState({
          loading: false,
          post: data,
          category: data.category,
          user: data.user,
          image: data.image,
          players: data.players,
          teams: data.teams
        })
    }

    render() {
        const imgUrl = `https://api.news.lmdfoot.com/${this.state.image.url}`;
        
        if (!this.state.loading) {
            return (
                <>
                    <div id="movie-detail-header-pro" style={{backgroundImage: 'url(' + imgUrl + ')'}}></div>
                    <div id="content-sidebar-pro">			
                        <div className="content-sidebar-section">
                            <ul className="progression-studios-slider-rating">
                                <li>Pro</li>
                                <li>
                                    <Link to={`/category/${this.state.category.id}`}>{this.state.category.name}</Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="content-sidebar-section">
                            <h4 className="content-sidebar-sub-header">Date de publication</h4>
                            <div className="content-sidebar-short-description">
                            {this.state.post.date}
                            </div>
                        </div>
                        
                        <div className="content-sidebar-section">
                            <h4 className="content-sidebar-sub-header">Nombre de vues</h4>
                            <div className="content-sidebar-short-description">2130</div>
                        </div>
                        
                        <div className="content-sidebar-section">
                            <h4 className="content-sidebar-sub-header">Auteur</h4>
                            <div className="content-sidebar-short-description">{this.state.user.username}</div>
                        </div>
                    </div>
                    <div id="col-main-with-sidebar" className="player">
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
                                <h2>Joueur(s) lié(s) à l'article</h2>
                                
                                <PlayerNews players={this.state.players} />
                                <TeamNews teams={this.state.teams} />
                                <Comments />
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        return (<h2>Waiting for API...</h2>);
        
    }
}