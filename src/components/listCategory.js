import React from "react";
import News from "./ficheNews";
import ReactPaginate from 'react-paginate';

export default class ListCategory extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: true,
          posts: [],
          category: []
        }
      }
    
      async componentDidMount() {
        let response = await fetch(`https://api.news.lmdfoot.com/articles/?category=${this.state.category}`);
        
        if (!response.ok) {
          return
        }
        
        let posts = await response.json();

       this.setState({ loading: false, posts: posts})


       console.log(this.state)
    }
    
    render() { 
        const nameCat = this.state.category.name;

        if (!this.state.loading) {
            return (
                <div className="dashboard-container">
                    <div className="col-12 home">
                        <div className="row">
                            <h4 className="heading-extra-margin-bottom heading-extra-margin-top">{nameCat}</h4>
                            <News posts={this.state.posts} />
                        </div>
                    </div>
                    <ul className="page-numbers">
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={this.state.posts.length}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                            />
                    </ul>   
                </div>
            );
        }
        return (<h2 className="postList-title">Waiting for API...</h2>);
    }
}