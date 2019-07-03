import React from "react";
import CategoryNews from "../components/Category";
import News from "../components/ficheNews";
import ReactPaginate from 'react-paginate';

export default class CategoryContainer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
        	loading: true,
        	categories: [],
        	postCategories: [],
			id: this.props.match.params.id,
			category: "",
		}
	}
	
	async getData(id) {
		let response = await fetch(`https://api.news.lmdfoot.com/categories/`);
		let responseID = await fetch(`https://api.news.lmdfoot.com/articles/?category=${id}`);
		let resCat = await fetch(`https://api.news.lmdfoot.com/categories/${id}`);

        if (!response.ok && !responseID.ok && !resCat.ok) {
        	return
        }

        let categories = await response.json();
		let postCategories = await responseID.json();
		let nameCat = await resCat.json();

        this.setState({
			loading: false,
			categories: categories,
			postCategories: postCategories,
			category: nameCat.name
		})
	}

    async componentDidMount() {
		this.getData(this.state.id);
    }  

   
	componentWillUpdate(nextProps) {
		this.getData(nextProps.match.params.id);
    }
    
    render() {
		if (!this.state.loading) {
			return (
				<main id="col-main">
					<CategoryNews categories={this.state.categories} />
					<h4 className="heading-extra-margin-bottom heading-extra-margin-top">{this.state.category}</h4>
					<News posts={this.state.postCategories} />
					<ul className="page-numbers">
						<ReactPaginate
							previousLabel={'previous'}
							nextLabel={'next'}
							breakLabel={'...'}
							breakClassName={'break-me'}
							pageCount={this.state.postCategories.length}
							marginPagesDisplayed={2}
							pageRangeDisplayed={5}
							onPageChange={this.handlePageClick}
							containerClassName={'pagination'}
							subContainerClassName={'pages pagination'}
							activeClassName={'active'}
							/>
					</ul> 
				</main>
			);
		}
		
		return (<h2>Waiting for API...</h2>);
    }
}