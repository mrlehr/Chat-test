// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Connexion from '../Connexion';
import Messages from '../Messages';
import NotFound from '../NotFound';

import './style.scss';

// == Composant
const App = () => (
  <div className="app" >
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route path='/pseudo/:pseudo' component={Messages} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

// == Export
export default App;
