import React from "react";
import News from "./ficheNews";
import Link from "react-router-dom/Link";
import Row from 'react-bootstrap/Row';

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
        let response = await fetch(`http://localhost:1337/articles?_limit=3`);
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
                            <div>
                                <Link to ='/news' >Voir plus</Link>
                            </div>
                            {/* Thumbnail video */}
                            <div className="central-top-bar">
                            {/* pourquoi pas mettre une vidéo */}
                            </div>
                            <h4 className="heading-extra-margin-bottom">Les vidéos</h4>
                            <div id="cart" className="col-12">
            <Row>
                      <div className="example-1 carte">
                        <div className="wrapper">
                          <div className="date">
                            <span className="day">12</span>
                            <span className="month">Aug</span>
                            <span className="year">2016</span>
                          </div>
                          <div className="data">
                            <div className="content">
                              <span className="author">Jane Doe</span>
                              <h1 className="title"><a href="#">Marco Verratti : «On est déjà une grande équipe»</a></h1>
                              <p className="text">L’international italien est revenu sur sa saison avec le Paris Saint-Germain et son entente avec l’entraîneur Thomas Tuchel</p>
                              <label for="show-menu" className="menu-button"><span></span></label>
                            </div>
                            <input type="checkbox" id="show-menu" />
                          </div>
                        </div>
                      </div>
                      <div className="example-2 carte">
                      <div className="wrapper">
                        <div className="header">
                          <div className="date">
                            <span className="day">12</span>
                            <span className="month">Aug</span>
                            <span className="year">2016</span>
                          </div>
                          <ul className="menu-content">
                            <li>
                              <a href="#" className="fa fa-bookmark-o"></a>
                            </li>
                            <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
                            <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                          </ul>
                        </div>
                        <div className="data">
                          <div className="content">
                            <span className="author">Jane Doe</span>
                            <h1 className="title"><a href="#">Edinson Cavani : «Nous étions imbattables»</a></h1>
                            <p className="text">Avant de rejoindre la sélection uruguayenne pour disputer la Copa América 2019, le meilleur buteur de l’histoire du Paris Saint-Germain est revenu sur sa saison et les améliorations à avoir.</p>
                            <a href="#" className="button">Read more</a>
                          </div>
                        </div>
                      </div>
                    </div>

            </Row>
                </div>
                    </div>
                </div>
            </div>
            );
        }
        return (<h2 className="postList-title">Waiting for API...</h2>);
    }
}