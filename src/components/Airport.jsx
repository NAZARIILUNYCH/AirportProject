/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Departure from './Departures';
import Arrivals from './Arrivals';

const Airport = () => {
  return (
    <Router>
      <div className="flights">
        <h1 className="flights-title">SEARCH FLIGHT</h1>
        <form>
          <input
            className="flights__search-field"
            type="text"
            placeholder="Airline, destination or flight"
          />
          <i className="fas fa-search"></i>
          <button className="flights__search-btn">SEARCH</button>
        </form>

        <div className="flights-btns">
          <Link to="/departures">
            <button className="flights-btn flights-btn_departures">
              <span className="fas fa-plane-departure" />
              DEPARTURES
            </button>
          </Link>

          <Link to="/arrivals">
            <button className="flights-btn flights-btn_arrivals">
              ARRIVALS
              <span className="fas fa-plane-arrival" />
            </button>
          </Link>
        </div>

        <Switch>
          <Route exact path="/departures">
            <Departure />
          </Route>

          <Route exact path="/arrivals">
            <Arrivals />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Airport;
