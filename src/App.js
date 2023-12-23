import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Connect from './Connect';
import Connection from './Connection';


function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/connection" component={Connection} />
          <Route path="/" component={Connect} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
