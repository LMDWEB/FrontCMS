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
                <div className="score-bar">
                  <div class="fixture-item__crests">
                    <div class="matchs">
                      <img class="fixture-item__team-crest fixture-item__team-crest--on-top" src="images/demo/paris-fc.png" alt="parisfc"/>
                      <p>Paris FC</p>
                      <img class="fixture-item__team-crest " src="images/demo/logo_om.png" alt="om"/>
                      <p>OM</p>
                      <p>24/09/2019</p>
                    </div>

                  </div>       {/* pourquoi pas mettre une vidéo */}
                </div>
                <Category categories={this.state.categories} />
                <ListNews categoriesList={this.categoriesList} />
            </main>
        );
    }
}