/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import ScoreboardList from './ScoreboardList';
import SearchField from './SearchField';
import { arrivalsScoreboard } from './scoreboard';

const Arrivals = () => {
  return (
    <div className="page page_scoreboard">
      <div className="flights">
        <h1 className="flights-title flights-title_scoreboard">SEARCH FLIGHT</h1>
        <SearchField />
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

      <ScoreboardList scoreboardList={arrivalsScoreboard} />
    </div>
  );
};

export default Arrivals;
