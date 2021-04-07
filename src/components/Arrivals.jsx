/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import FilterList from './FilterList';
import { getFlightsData } from '../airportGateway';
import { arrivalsSelector } from '../redux/airport.selectors';

const Arrivals = ({ filterText, onChange, filterList, onClick, flightList, getArrivalList }) => {
  const [arrivalsList, setArrivalsList] = useState([]);

  useEffect(() => {
    getFlightsData().then(res =>
      setArrivalsList(
        res.body.arrival
          .slice()
          .filter(flight => new Date(flight.timeArrShedule).getDate() === new Date().getDate())
          .map(el => {
            return {
              id: el.ID,
              terminal: el.term,
              localTime: `${moment(el.timeArrShedule).format('HH:mm')}`,
              destination: el['airportFromID.name_en'],
              status:
                el.status === 'DP'
                  ? `Departed at ${moment(el.timeLandCalc).format('HH:mm')}`
                  : `Landed ${`${moment(el.timeLandCalc).format('HH:mm')}`}`,
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
      ).sort((a, b) => a.timeArrShedule - b.timeArrShedule),
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

      <FilterList scoreboardList={filterList(arrivalsList)} />
    </div>
  );
};

// const mapState = state => ({
//   getArrivalList: arrivalsSelector(state),
// });

export default Arrivals;
