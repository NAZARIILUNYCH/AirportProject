/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import ScoreboardList from './ScoreboardList';
import SearchField from './SearchField';
import { departuresScoreboard } from './scoreboard';

const Departure = () => {
  return (
    <div className="page page_scoreboard">
      <div className="flights">
        <h1 className="flights-title flights-title_scoreboard">SEARCH FLIGHT</h1>
        <SearchField />
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

      <ScoreboardList scoreboardList={departuresScoreboard} />
    </div>
  );
};

export default Departure;
