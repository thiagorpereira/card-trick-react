import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import MindReading from './pages/MindReading';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/mind_reading" component={MindReading} />
      </Switch>
    </BrowserRouter>
  );
}