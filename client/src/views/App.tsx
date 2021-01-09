import React from 'react';

// Libraries
import { Router, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Home from './Home';
import Upload from './Upload';

// Utils
import createBrowserHistory from '../utils/history';

function App() {
  return (
    <Router history={createBrowserHistory}>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/upload-frame' exact>
          <Upload />
        </Route>

        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
