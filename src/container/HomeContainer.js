import React from "react";
import ListNews from "../components/listNews";
import Category from "../components/Category";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
             <Container fluid>
              <Row>
                  <div className="score-bar">
                    <div className=" col-7 fixture-item__crests">
                      <div className="matchs">
                      <Col lg={true}>
                        <img className="fixture-item__team-crest fixture-item__team-crest--on-top" src="images/demo/paris-fc.png" alt="parisfc"/>
                        <p>Paris FC</p>
                      </Col>
                      <Col lg={true}>24/09/2019</Col>
                      <Col lg={true}>Parc des Princes</Col>
                      <Col lg={true}>
                        <img className="fixture-item__team-crest " src="images/demo/logo_om.png" alt="om"/>
                        <p>OM</p>
                      </Col>
                      </div>
                    </div>  {/* pourquoi pas mettre une vidéo */}
                  </div>
              </Row>   
              <Category categories={this.state.categories} />
              <ListNews categoriesList={this.categoriesList} />
              
              </Container> 

              
            </main>
        );
    }
}