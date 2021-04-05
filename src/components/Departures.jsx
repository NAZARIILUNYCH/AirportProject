/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import FilterList from './FilterList';
import { departuresList } from './dataList';

const Departures = ({ filterText, onChange, filterList, onClick }) => {
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
          <button className="flights-btn flights-btn__scoreboard flights-btn__scoreboard_departures flights-btn__scoreboard_selected">
            <span className="fas fa-plane-departure" />
            DEPARTURES
          </button>
        </Link>

        <Link to="/arrivals">
          <button className="flights-btn flights-btn__scoreboard flights-btn__scoreboard_arrivals">
            ARRIVALS
            <span className="fas fa-plane-arrival" />
          </button>
        </Link>
      </div>

      <FilterList scoreboardList={filterList(departuresList)} />
    </div>
  );
};

export default Departures;
