import { SET_DEPARTURE_LIST, SET_ARRIVALS_LIST } from './airport.actions';

const initialState = {
  departureList: [],
  arrivalList: [],
};

const airportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEPARTURE_LIST: {
      return {
        ...state,
        departureList: action.payload.departure
          .slice()
          .filter(flight => new Date(flight.time).getDate() === new Date().getDate())
          .sort((a, b) => a.time - b.time),
      };
    }

    case SET_ARRIVALS_LIST: {
      return {
        ...state,
        arrivalList: action.payload.arrival
          .slice()
          .filter(flight => new Date(flight.time).getDate() === new Date().getDate())
          .sort((a, b) => a.time - b.time),
      };
    }

    default:
      return state;
  }
};

export default airportReducer;
