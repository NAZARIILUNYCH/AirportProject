import moment from 'moment';

// const airportUrl = `https://api.iev.aero/api/flights/${moment(new Date()).format('MM-DD-YYYY')}`;
const airportUrl = `https://api.iev.aero/api/flights/05-04-2021`;

export const getFligthsData = () => {
  return fetch(airportUrl).then(res => res.json());
};
