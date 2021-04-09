/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FilterList from './FilterList';
import SearchField from './SearchField';
import { getDeparture } from '../redux/airport.actions';

const Departures = ({
  filterList,
  filterText,
  onChange,
  handleClick,
  departuresList,
  getDepartureList,
}) => {
  useEffect(() => {
    getDepartureList();
  }, []);

  return (
    <div className="page page_scoreboard">
      <SearchField
        onChange={onChange}
        onChangeText={filterText}
        onClick={handleClick}
        titleStyle="flights-title flights-title_scoreboard"
        depBtn="flights-btn flights-btn__scoreboard flights-btn__scoreboard_departures flights-btn__scoreboard_selected"
        arvBtn="flights-btn flights-btn__scoreboard flights-btn__scoreboard_arrivals"
      />

      <FilterList scoreboardList={filterList(departuresList)} />
    </div>
  );
};

const mapState = state => ({
  departuresList: state.flights.departureList,
});

const mapDispatch = {
  getDepartureList: getDeparture,
};

export default connect(mapState, mapDispatch)(Departures);
