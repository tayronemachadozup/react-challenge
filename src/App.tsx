import React from 'react';
import Home from './pages/home';
import Movies from './pages/movies'
import Series from './pages/series'
import Childish from './pages/childish'
import Search from './pages/search'
import GlobalStyle from './components/commons.styled';
import Header from './components/Header/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <main className="App">
        <GlobalStyle/>            
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/series" component={Series}/>
          <Route path="/childish" component={Childish}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
