import React from "react";
import News from "./ficheNews";
import Link from "react-router-dom/Link";

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
                            <div className="row">
                            <div className="item-listing-container-skrn news">
                                <article className="image-card">
                                    <a className="image-card__main-link" href="https://www.psg.fr/equipes/equipe-premiere/content/paris-saint-germain-manchester-united-fc-le-match" title="Paris Saint-Germain - Manchester United FC : Le match">
                                        <div className="image-card__background-container">
                                            <figure className="figure">
                                                <img className="image u-blur-up lazyautosizes lazyloaded" src="https://psgimages.stadion.io/media/22045/diapo-manu-19-verratti-am.jpg?center=0.34408602150537637,0.46953405017921146&amp;mode=crop&amp;width=450&amp;height=338&amp;quality=60" sizes="685px" alt=""/>
                                            </figure>
                                        </div>
                                        <header className="image-card__header">
                                            <span className="image-card__section"></span>
                                            <h1 className="image-card__title">Paris Saint-Germain - Manchester United FC : Le match</h1>
                                            <div className="info-bar info-bar--firstTeam">
                                                <div className="info-bar__pub-info">
                                                    <span className="info-bar__context">
                                                    Full Match
                                                    </span>
                                                </div>
                                            </div>
                                        </header>
                                    </a>
                                </article>
                            </div>
                            <div className="item-listing-container-skrn news">
                                <article className="image-card">
                                    <a className="image-card__main-link" href="https://www.psg.fr/equipes/equipe-premiere/content/paris-saint-germain-manchester-united-fc-le-match" title="Paris Saint-Germain - Manchester United FC : Le match">
                                        <div className="image-card__background-container">
                                            <figure className="figure">
                                                <img className="image u-blur-up lazyautosizes lazyloaded" src="https://psgimages.stadion.io/media/22045/diapo-manu-19-verratti-am.jpg?center=0.34408602150537637,0.46953405017921146&amp;mode=crop&amp;width=450&amp;height=338&amp;quality=60" sizes="685px" alt=""/>
                                            </figure>
                                        </div>
                                        <header className="image-card__header">
                                            <span className="image-card__section"></span>
                                            <h1 className="image-card__title">Paris Saint-Germain - Manchester United FC : Le match</h1>
                                            <div className="info-bar info-bar--firstTeam">
                                                <div className="info-bar__pub-info">
                                                    <span className="info-bar__context">
                                                    Full Match
                                                    </span>
                                                </div>
                                            </div>
                                        </header>
                                    </a>
                                </article>
                            </div>
                            <div className="item-listing-container-skrn news">
                                <article className="image-card">
                                    <a className="image-card__main-link" href="https://www.psg.fr/equipes/equipe-premiere/content/paris-saint-germain-manchester-united-fc-le-match" title="Paris Saint-Germain - Manchester United FC : Le match">
                                        <div className="image-card__background-container">
                                            <figure className="figure">
                                                <img className="image u-blur-up lazyautosizes lazyloaded" src="https://psgimages.stadion.io/media/22045/diapo-manu-19-verratti-am.jpg?center=0.34408602150537637,0.46953405017921146&amp;mode=crop&amp;width=450&amp;height=338&amp;quality=60" sizes="685px" alt=""/>
                                            </figure>
                                        </div>
                                        <header className="image-card__header">
                                            <span className="image-card__section"></span>
                                            <h1 className="image-card__title">Paris Saint-Germain - Manchester United FC : Le match</h1>
                                            <div className="info-bar info-bar--firstTeam">
                                                <div className="info-bar__pub-info">
                                                    <span className="info-bar__context">
                                                    Full Match
                                                    </span>
                                                </div>
                                            </div>
                                        </header>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
        return (<h2 className="postList-title">Waiting for API...</h2>);
    }
}