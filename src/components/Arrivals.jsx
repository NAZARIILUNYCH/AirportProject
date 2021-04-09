/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FilterList from './FilterList';
import SearchField from './SearchField';
import { getArrivals } from '../redux/airport.actions';

const Arrivals = ({
  filterList,
  filterText,
  onChange,
  handleClick,
  arrivalsList,
  getArrivalsList,
}) => {
  useEffect(() => {
    getArrivalsList();
  }, []);

  return (
    <div className="page page_scoreboard">
      <SearchField
        onChange={onChange}
        onChangeText={filterText}
        onClick={handleClick}
        titleStyle="flights-title flights-title_scoreboard"
        depBtn="flights-btn flights-btn__scoreboard flights-btn__scoreboard_departures"
        arvBtn="flights-btn flights-btn__scoreboard flights-btn__scoreboard_arrivals flights-btn__scoreboard_selected"
      />

      <FilterList scoreboardList={filterList(arrivalsList)} />
    </div>
  );
};

const mapState = state => ({
  arrivalsList: state.flights.arrivalList,
});

const mapDispatch = {
  getArrivalsList: getArrivals,
};

export default connect(mapState, mapDispatch)(Arrivals);
