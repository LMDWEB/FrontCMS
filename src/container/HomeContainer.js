import React from "react";
import ListNews from "../components/listNews";
import Category from "../components/Category";
import FeaturedNews from "../components/FeaturedNews";

export default class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          loading: true,
          categories: []
        }
      }
    
    async componentDidMount() {
        let response = await fetch(`http://localhost:1337/categories/`);
        if (!response.ok) {
          return
        }
    
        let categories = await response.json()
        this.setState({ loading: false, categories: categories })
    }    

    render() {

        return (
            <main id="col-main">
                <FeaturedNews />
                <Category categories={this.state.categories} />
                <ListNews categoriesList={this.categoriesList} />
            </main>
        );
    }
}