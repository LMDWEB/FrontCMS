import React, { Component } from 'react';
import './App.scss';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Header from './container/HeaderContainer';
import Footer from './components/footer';
import SecurityContainer from './container/SecurityContainer';
import ProfileContainer from './container/ProfileContainer';
import NewsContainer from './container/NewsContainer';
import ClubContainer from './container/ClubContainer';
import CategoryContainer from './container/CategoryContainer';
import SeasonContainer from './container/SeasonContainer';
import HomeContainer from './container/HomeContainer';
import { Route, Switch } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/articles" component={ArticleList} />
            <Route path="/test/:id" component={Article} />
            <Route path="/security" component={SecurityContainer} />
            <Route path="/player/:id" component={ProfileContainer} />
            <Route path="/article/:id" component={NewsContainer} />
            <Route path="/category/:id" component={CategoryContainer} />
            <Route path="/club" component={ClubContainer} />
            <Route path="/season" component={SeasonContainer} />
          </Switch>
        </main>
        <Footer />
      </div >
    );
  }
}

export default App;
