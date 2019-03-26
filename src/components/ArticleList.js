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
    let response = await fetch("http://localhost:1337/articles/");
    if (!response.ok) {
      return
    }

    let posts = await response.json()
    this.setState({ loading: false, posts: posts })
  }

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
                    <img src={`http://localhost:1337/${post.image.url}`} alt={post.image.name} />
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