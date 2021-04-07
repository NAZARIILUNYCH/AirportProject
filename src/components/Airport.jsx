/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Departures from './Departures';
import Arrivals from './Arrivals';

const Airport = () => {
  const [onChangeText, setOnChangeText] = useState('');
  const [filterText, setFilterText] = useState('');

  const onChange = e => {
    setOnChangeText(e.target.value);
  };

  const handleClick = () => {
    setFilterText(onChangeText);
  };

  const filterList = scoreboardList =>
    scoreboardList.filter(
      elem =>
        elem.destination.toUpperCase().includes(filterText.toUpperCase()) ||
        elem.flight.toUpperCase().includes(filterText.toUpperCase()),
    );

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="page page_airport">
            <div className="flights">
              <h1 className="flights-title">SEARCH FLIGHT</h1>
              <form>
                <input
                  className="flights__search-field"
                  type="text"
                  placeholder="Airline, destination or flight #"
                  value={onChangeText}
                  onChange={onChange}
                />
                <i className="fas fa-search"></i>
                <Link to="/departures">
                  <button type="button" className="flights__search-btn" onClick={handleClick}>
                    SEARCH
                  </button>
                </Link>
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
            </div>
          </div>
        </Route>

        <Route exact path="/departures">
          <Departures
            filterText={onChangeText}
            setFilterText={setFilterText}
            onChange={onChange}
            filterList={filterList}
            onClick={handleClick}
          />
        </Route>

        <Route exact path="/arrivals">
          <Arrivals
            filterText={onChangeText}
            setFilterText={setFilterText}
            onChange={onChange}
            filterList={filterList}
            onClick={handleClick}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default Airport;
