// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopBar from './components/TopBar';
import Profile from './pages/Profile';
import History from './pages/History';
import StartWorkout from './pages/StartWorkout';
import Exercises from './pages/Exercises';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/history" component={History} />
        <Route path="/start-workout" component={StartWorkout} />
        <Route path="/exercises" component={Exercises} />
      </Switch>
    </Router>
  );
};

export default App;
