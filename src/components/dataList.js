/* eslint-disable no-unused-expressions */
import { getFligthsData } from './airportGateway';

export const flightsData = {
  // departuresList: [
  //   getFligthsData().then(res =>
  //     res.body.departure.map(el => {
  //       return {
  //         id: el.ID,
  //         terminal: el.term,
  //         localTime: el.actual,
  //         destination: el.city_en,
  //         status: el.status,
  //         airline: el.airline.en.name,
  //         flight: `${el.IATA}${el.fltNo}`,
  //       };
  //     }),
  //   ),
  // ],

  arrivalsList: [
    {
      id: 'id-4',
      terminal: 'A',
      localTime: '0:55',
      destination: 'Larnaca',
      status: 'Landed 0:53',
      airline: 'Wizz Air',
      flight: 'W66260',
    },
  ],
};

console.log(flightsData.departuresList);
