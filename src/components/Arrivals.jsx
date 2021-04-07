/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterList from './FilterList';
// import { flightsData } from '../dataList';
import { getFlightsData } from '../airportGateway';

const Arrivals = ({ filterText, onChange, filterList, onClick }) => {
  const [arrivalsList, setArrivalsList] = useState([]);

  return (
    <div className="page page_scoreboard">
      <div className="flights">
        <h1 className="flights-title flights-title_scoreboard">SEARCH FLIGHT</h1>
        <form>
          <input
            className="flights__search-field"
            type="text"
            placeholder="Airline, destination or flight #"
            value={filterText}
            onChange={onChange}
          />
          <i className="fas fa-search"></i>
          <button type="button" className="flights__search-btn" onClick={onClick}>
            SEARCH
          </button>
        </form>
      </div>

      <div className="flights-btns">
        <Link to="/departures">
          <button className="flights-btn flights-btn__scoreboard flights-btn__scoreboard_departures">
            <span className="fas fa-plane-departure" />
            DEPARTURES
          </button>
        </Link>

        <Link to="/arrivals">
          <button className="flights-btn flights-btn__scoreboard flights-btn__scoreboard_arrivals flights-btn__scoreboard_selected">
            ARRIVALS
            <span className="fas fa-plane-arrival" />
          </button>
        </Link>
      </div>

      <FilterList scoreboardList={filterList([])} />
    </div>
  );
};

export default Arrivals;
