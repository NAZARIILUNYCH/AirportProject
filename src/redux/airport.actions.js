import moment from 'moment';
import { getFlightsData } from '../airportGateway';

export const SET_FLIGHTS_LIST = 'SET_FLIGHTS_LIST';

export const setFlightList = flightsData => {
  return {
    type: SET_FLIGHTS_LIST,
    payload: {
      flightsData,
    },
  };
};

export const getFlightList = () => {
  const newDate = moment(new Date()).format('DD-MM-YYYY');
  return dispatch => {
    getFlightsData(newDate).then(flightsData => dispatch(setFlightList(flightsData.body)));
  };
};
