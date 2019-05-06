import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import './assets/style/app.scss';

import {Header} from './components/header';
import Home from './pages/home';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
