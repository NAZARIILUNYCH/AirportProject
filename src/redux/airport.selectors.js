import { createSelector } from 'reselect';

export const flightsDataSelector = state => state.flightsList.flightsData;
export const departureListSelector = state => state.flightsList.flightsData.departure;
export const arrivalListSelector = state => state.flightsList.flightsData.arrival;

export const departuresSelector = createSelector([departureListSelector], dataList => {
  if (dataList) {
    return dataList
      .slice()
      .filter(el => new Date(el.timeDepShedule).getDate() === new Date().getDate())
      .map(el => {
        return {
          ...el,
          localTime: el.timeDepShedule,
          destination: el['airportToID.name_en'],
          status: el.timeTakeofFact,
        };
      });
  }
  return [];
});

export const arrivalsSelector = createSelector([arrivalListSelector], dataList => {
  if (dataList) {
    return dataList
      .slice()
      .filter(el => new Date(el.timeArrShedule).getDate() === new Date().getDate())
      .map(el => {
        return {
          ...el,
          localTime: el.timeArrShedule,
          destination: el['airportFromID.name_en'],
          status: el.timeLandCalc,
        };
      })
      .sort((a, b) => a.localTime - b.localTime);
  }
  return [];
});
