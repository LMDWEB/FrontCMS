import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: []
    }
  }

  async componentDidMount() {
    let response = await fetch("https://api.news.lmdfoot.com/articles/");
    if (!response.ok) {
      return
    }

    let posts = await response.json()
    this.setState({ loading: false, posts: posts })
  }

  //To do : Conditionner pour afficher les flash news
  //To do : Conditionner pour afficher les vidéos
  //To do : Car sur le page club il faut separé les articles et les vidéos propre au club
  render() {
    if (!this.state.loading) {
      return (
        <div className="postList">
          <h2 className="postList-title">Available posts ({this.state.posts.length})</h2>
          <div className="postList-container">
            {this.state.posts.map((post, index) => {
              return (
                <div className="postList-post" key={post.id}>
                  <Link to={`/article/${post.id}`}>
                    <h3>{post.title}</h3>
                    <img src={`https://api.news.lmdfoot.com/${post.image.url}`} alt={post.image.name} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return (<h2 className="postList-title">Waiting for API...</h2>);
  }
}