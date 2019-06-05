import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import ChatDialogWindow from './components/chatDialogWindow/chatDialogWindow';
import Header from './components/header/header';
import AuthorisationWindow from './components/authorisationWindow/authorisationWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" />
          <Route path="/auth" component={AuthorisationWindow} />
          <Route path="/chat" component={ChatDialogWindow} />
        </Switch>
      </div>
    );
  }
}

export default App;
