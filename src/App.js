import React, { Component } from 'react';
import './App.scss';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Header from './container/HeaderContainer';
import Footer from './components/footer';
import SecurityContainer from './container/SecurityContainer';
import PlayerContainer from './container/PlayerContainer';
import NewsContainer from './container/NewsContainer';
import ClubContainer from './container/ClubContainer';
import CategoryContainer from './container/CategoryContainer';
import SeasonContainer from './container/SeasonContainer';
import HomeContainer from './container/HomeContainer';
import ChampionshipContainer from './container/ChampionshipContainer';
import AllNewsContainer from './container/AllNewsContainer';
import LoginForm from './container/LoginForm';
import { Route, Switch } from "react-router";
import ProfileContainer from './container/ProfileContainer'
import EffectifsContainer from './container/EffectifsContainer';
import Page404Container from './container/Page404Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/signin" exact component={LoginForm} />
            <Route path="/articles" component={ArticleList} />
            <Route path="/test/:id" component={Article} />
            <Route path="/security" component={SecurityContainer} />
            <Route path="/player/:id" component={PlayerContainer} />
            <Route path="/article/:id" component={NewsContainer} />
            <Route path="/category/:id" component={CategoryContainer} />
            <Route path="/club" component={ClubContainer} />
            <Route path="/season" component={SeasonContainer} />
            <Route path="/championship" component={ChampionshipContainer} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/news" component={AllNewsContainer} />
            <Route path = "/*" component={Page404Container} /> 
            {/* <Route path="/news" component={EffectifsContainer} />  */}
          </Switch>
        </main>
        <Footer />
      </div >
    );
  }
}

export default App;
