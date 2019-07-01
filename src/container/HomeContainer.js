import React from "react";
import ListNews from "../components/listNews";
import Category from "../components/Category";
import ArticleList from "../components/ArticleList";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FeaturedNews from "../components/FeaturedNews";
import ArticleRelated from "../components/ArticleRelated";
import ListCategory from "../components/listCategory";


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

      var bg='/images/demo/friendly.png'


        return (

            <main id="col-main">      
             <FeaturedNews />
             <Container fluid>
              {/* <Row>
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
                    </div>  {/* pourquoi pas mettre une vidéo 
                  </div> 
                  </Row> */}
                  {/* <Row>
                  <div id="matchday-section" className="col-12">
                    <div class="col-md-12 match-banner">
                        <div class="col-auto ml-auto col-sm team-one">
                            <img src="images/demo/psg-logo.png" alt="TeamHome"/>
                            <span class="float-right team-one-text">PARIS SAINT GERMAIN</span>
                        </div>

                    
                        <div class="col-sm infos text-center">
                            <span class="text-date">27 JUILLET 2019</span>
                            <span class="text-lieu">Macau Olympic Stadium</span>
                            <span class="match-type">Amical Journée 1</span>
                            <span class="text-time">21:00</span>
                        </div>
                    

                        <div class="col-auto mr-auto col-sm team-two">
                            <img src="images/demo/milan-logo.png" alt="TeamAway"/>
                            <span class="float-left team-two-text">INTER MILAN</span>
                        </div>
                    </div>
                  </div>
              </Row>  */}
              <Row>
                <div id="matchday-section" className="justify-content-md-center background-image">
                  <div style={{backgroundImage: "url("+bg+")" ,backgroundRepeat: 'no-repeat', backgroundSize: 'contain' , content: '', position: 'absolute' , top: '2px' , bottom: '0', left: '0', right: '0' , opacity: '0.075'}} />
                  

                  <Col xs lg="4" className="team-one">
                      <img src="images/demo/psg-logo.png" alt="TeamHome"/>
                      <span class="float-right team-one-text">PARIS SAINT GERMAIN</span>
                  </Col>

                  <Col xs lg="4" className="infos">
                    <span class="text-date">27 JUILLET 2019</span>
                    <span class="text-lieu">Macau Olympic Stadium</span>
                    <span class="text-time">21:00</span>
                    <span class="match-type">Amical Journée 1</span>
                  </Col>

                  <Col xs lg="4" className="team-two">
                    <img src="images/demo/milan-logo.png" alt="TeamAway"/>
                    <span class="float-left team-two-text">INTER MILAN</span>
                  </Col>
                </div>
              </Row>
             {/* <Row>
                 <Category categories={this.state.categories} /> 
              </Row>*/}
              
                
              </Container> 
              <ListNews categoriesList={this.categoriesList} />
              
            </main>
        );
    }
}