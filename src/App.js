import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { AddNewCar } from './components/AddNewCar';
import { AddNewTrip } from './components/AddNewTrip';
import { TripList } from './components/TripList';

import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AddNewCar">Add a New Car</Link>
            </li>
            <li>
              <Link to="/AddNewTrip">Add a New Trip</Link>
            </li>
            <li>
              <Link to="/TripList">Trips</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AddNewCar" element={<AddNewCar />} />
          <Route path="/AddNewTrip" element={<AddNewTrip />} />
          <Route path="/TripList" element={<TripList />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
