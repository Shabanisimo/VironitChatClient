import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ChatDialogWindow from './components/chatDialogWindow/chatDialogWindow';
import Header from './components/header/header';
import AuthorisationWindow from './components/authorisationWindow/authorisationWindow';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" />
      <Route path="/auth" component={AuthorisationWindow} />
      <Route path="/chat" component={ChatDialogWindow} />
    </Switch>
  </div>
);

export default App;
