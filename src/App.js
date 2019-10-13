import React from 'react';
import Dogs from './components/Dogs';
import Cats from './components/Cats';
import Foxes from './components/Foxes';
import Home from './components/Home';
import Navigation from './components/Navigation';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation/>
      <div>
      <Switch>
      <Route path="/"exact>
          <Home/>
        </Route>
        <Route path="/Dog">
          <Dogs/>
        </Route>
        <Route path="/Cat">
          <Cats/>
        </Route>
        <Route path="/Fox">
          <Foxes/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
