/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Departure from './Departures';
import Arrivals from './Arrivals';
import SearchField from './SearchField';

const Airport = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="page page_airport">
            <div className="flights">
              <h1 className="flights-title">SEARCH FLIGHT</h1>
              <SearchField />

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
            </div>
          </div>
        </Route>

        <Route exact path="/departures">
          <Departure />
        </Route>

        <Route exact path="/arrivals">
          <Arrivals />
        </Route>
      </Switch>
    </Router>
  );
};

export default Airport;
