import moment from 'moment';

const airportUrl = `https://api.iev.aero/api/flights/06-04-2021`;

export const getFlightsData = () => {
  return fetch(airportUrl).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw new Error('Is not available');
  });
};
