import moment from 'moment';
import React from 'react';
import { getFlightsData } from '../airportGateway';

export const SET_ARRIVALS_LIST = 'SCOREBOARD/SET_ARRIVALS_LIST';
export const SET_DEPARTURE_LIST = 'SCOREBOARD/SET_DEPARTURE_LIST';

export const arrivalList = arrival => ({
  type: SET_ARRIVALS_LIST,
  payload: {
    arrival,
  },
});

export const departureList = departure => ({
  type: SET_DEPARTURE_LIST,
  payload: {
    departure,
  },
});

export const getArrivals = () => dispatch => {
  getFlightsData().then(res =>
    dispatch(
      arrivalList(
        res.body.arrival.map(el => {
          return {
            id: el.ID,
            terminal: el.term,
            time: el.timeArrShedule,
            localTime: moment(el.timeArrShedule).format('HH:mm'),
            destination: el['airportFromID.name_en'],
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
    ),
  );
};

export const getDeparture = () => dispatch => {
  getFlightsData().then(res =>
    dispatch(
      departureList(
        res.body.departure.map(el => {
          return {
            id: el.ID,
            terminal: el.term,
            time: el.timeDepShedule,
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
    ),
  );
};
