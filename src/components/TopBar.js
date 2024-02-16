// TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/start-workout">Start Workout</Link>
          </li>
          <li>
            <Link to="/exercises">Exercises</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
