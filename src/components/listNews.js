import React from "react";
import News from "./ficheNews";

export default class ListNews extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: true,
          posts: [],
          categories: []
        }
      }
    
      async componentDidMount() {
        let response = await fetch(`http://localhost:1337/articles/`);
        if (!response.ok) {
          return
        }
    
        let posts = await response.json()
        this.setState({ loading: false, posts: posts, categories: posts.category })

    }

    render() { 
        if (!this.state.loading) {
            return (
                <div className="dashboard-container">
                    <div className="col-12 home">
                        <div className="row">
                            <h4 className="heading-extra-margin-bottom">Toute l'actualité du PSG</h4>
                            <News posts={this.state.posts} />
                        </div>
                    </div>
                </div>
            );
        }
        return (<h2 className="postList-title">Waiting for API...</h2>);
    }
}