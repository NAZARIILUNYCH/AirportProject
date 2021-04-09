/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Departures from './Departures';
import Arrivals from './Arrivals';
import SearchField from './SearchField';

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
            <SearchField
              onChange={onChange}
              onChangeText={onChangeText}
              onClick={handleClick}
              titleStyle="flights-title"
              depBtn="flights-btn flights-btn_departures"
              arvBtn="flights-btn flights-btn_arrivals"
              path="/departures"
            />
          </div>
        </Route>

        <Route exact path="/departures">
          <Departures
            filterText={onChangeText}
            setFilterText={setFilterText}
            onChange={onChange}
            filterList={filterList}
            handleClick={handleClick}
          />
        </Route>

        <Route exact path="/arrivals">
          <Arrivals
            filterText={onChangeText}
            setFilterText={setFilterText}
            onChange={onChange}
            filterList={filterList}
            handleClick={handleClick}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default Airport;
