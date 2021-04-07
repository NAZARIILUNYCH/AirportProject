/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import FilterList from './FilterList';
import { getFlightsData } from '../airportGateway';

const Departures = ({ filterText, onChange, filterList, onClick }) => {
  const [departuresList, setDeparturesList] = useState([]);

  useEffect(() => {
    getFlightsData().then(res =>
      setDeparturesList(
        res.body.departure
          .slice()
          .filter(flight => new Date(flight.timeDepShedule).getDate() === new Date().getDate())
          .map(el => {
            return {
              id: el.ID,
              terminal: el.term,
              localTime: `${moment(el.timeDepShedule).format('HH:mm')}`,
              destination: el['airportToID.name_en'],
              status:
                el.status === 'DP'
                  ? `Departed at ${moment(el.timeTakeofFact).format('HH:mm')}`
                  : `Landed ${`${moment(el.timeTakeofFact).format('HH:mm')}`}`,
              airline: (
                <div className="airline__logo">
                  <img
                    className="airline__logo-img"
                    src={el.airline.en.logoSmallName}
                    alt="airline-logo"
                  />
                  <span className="airline__logo-name">{el.airline.en.name}</span>
                </div>
              ),
              flight: `${el['carrierID.IATA']}${el.fltNo}`,
            };
          }),
      ),
    );
  }, []);

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
