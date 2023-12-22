import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Connect from './Connect';
import Connection from './Connection';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/connect" component={Connect} />
          <Route path="/connection" component={Connection} />
          <Route path="/" component={Sidebar} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
