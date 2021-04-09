import moment from 'moment';

const airportUrl = `https://api.iev.aero/api/flights/${moment(new Date()).format('DD-MM-YYYY')}`;

export const getFlightsData = () => {
  return fetch(airportUrl).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw new Error('Is not available');
  });
};
