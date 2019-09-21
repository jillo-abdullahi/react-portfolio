import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
