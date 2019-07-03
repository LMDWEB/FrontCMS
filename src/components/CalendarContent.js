import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default class CalendarContent extends Component {
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

    var bg='/images/demo/friendly.png';

    if (!this.state.loading) {
      return (
        <Container fluid>
            <Row>
                <div id="matchday-section" className="justify-content-md-center background-image">
        
                  <Col xs lg="4" className="team-one team-one-calendar">
                      <img src="images/demo/psg-logo.png" alt="TeamHome"/>
                      <span class="float-right team-one-text">PARIS SAINT GERMAIN</span>
                  </Col>

                  <Col xs lg="4" className="infos">
                    <span class="text-date">27 JUILLET 2019</span>
                    <span class="text-lieu">Macau Olympic Stadium</span>
                    <span class="text-time">21:00</span>
                    <span class="match-type">Amical Journée 1</span>
                  </Col>

                  <Col xs lg="4" className="team-two team-two-calendar">
                    <img src="images/demo/milan-logo.png" alt="TeamAway"/>
                    <span class="float-left team-two-text">INTER MILAN</span>
                  </Col>
                </div>
              </Row>

              <Row>
              
              <div class="fixture-list">


                    <article id="fixture_102957" class="fixture-item fixture-item--firstTeam">
                        <div class="container fixture-item__content">
                    
                        <p class="fixture-item__details" style={{backgroundImage: "url("+bg+")", backgroundPositionX: 'center', top: '10px', position: 'relative'}}>
                        <span class="fixture-item__competition ml-auto">Amical </span>
                        <span class="NextMatch-time ml-auto">21:00</span>

                        </p>


                        <a href="https://www.psg.fr/equipes/equipe-premiere/calendrier-et-resultats/201920/paris-saint-germain-v-dynamo-dresde" class="fixture-item__results-mobile">
                        <div class="fixture-item__team-mobile ">
                            <img class="fixture-item__team-crest-mobile" src="https://psgimages.stadion.io/media/2874/psg_logo_seul_volume_rvb.png" alt="Paris Saint-Germain crest crest"/>

                            <p class="fixture-item__team-name ">
                            Paris
                            </p>
                        </div>
                        <span class="fixture-item__scores-mobile">
                                    <span class="fixture-item__score-mobile ">
                            
                                    </span>
                                
                                    <span class="fixture-item__score-mobile ">
                            
                                    </span>
                                </span>
                        <div class="fixture-item__team-mobile ">
                            <img class="fixture-item__team-crest-mobile" src="https://psgimages.stadion.io/media/27031/dynamo-dresden.png" alt="Dynamo Dresde crest crest"/>

                            <p class="fixture-item__team-name  ">
                            Dresde
                            </p>
                        </div>
                        </a>

                        <div class="fixture-item__results">
                            <div class="fixture-item__crests">
                            <img class="fixture-item__team-crest fixture-item__team-crest--on-top" src="https://psgimages.stadion.io/media/2874/psg_logo_seul_volume_rvb.png" alt="Paris Saint-Germain crest crest"/>
                            <img class="fixture-item__team-crest " src="https://psgimages.stadion.io/media/27031/dynamo-dresden.png" alt="Dynamo Dresde crest crest"/>
                            </div>
                            <div class="fixture-item__results-copy">
                            <p class="fixture-item__team ">
                                        <span class="fixture-item__team-name  ">
                                Paris Saint-Germain
                            </span>
                                <span class="fixture-item__score">
                                </span>
                            </p>
                            <p class="fixture-item__team ">
                                        <span class="fixture-item__team-name  ">
                                Dynamo Dresde
                            </span>
                                <span class="fixture-item__score">
                                </span>
                            </p>
                            </div>
                        </div>
                        <nav class="fixture-item__actions">
                                <div class="fixture-item__action">
                                 <a class="btn btn--primary btn--fullwidth btn-match" href="https://billetterie.psg.fr/fr/footpro">Voir les Détails</a>
                                </div>
                        </nav>
                    </div>
                        
                    </article>
                </div>
              </Row>
        </Container>
      );
    }
    return (<h2 className="postList-title">Waiting for API...</h2>);
  }
}