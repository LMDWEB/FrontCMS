import React from "react";
import PlayerNews from "./playerNews";
import RatingNews from "./ratingNews";
import Comments from "./comments";

export default class NewsContent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { loading: true, post: {} }
      }
    
      async componentDidMount() {
        let response = await fetch(`http://localhost:1337/articles/${this.props.match.params.id}`)
        let data = await response.json()
        this.setState({
          loading: false,
          post: data
        })
    }
    
    render() {
        if (!this.state.loading) {
            return (
                <div id="col-main-with-sidebar">
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
                            <PlayerNews />
                            <Comments />
                        </div>
                    </div>
                </div>
            );
          }
      
        return (<h2>Waiting for API...</h2>);
    }
}