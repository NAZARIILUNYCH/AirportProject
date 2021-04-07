import { SCOREBOARD_LIST } from './airport.actions';

const initialState = {
  flights: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCOREBOARD_LIST:
      return {
        ...state,
        flights: action.payload.flights,
      };
    default:
      return state;
  }
};

export default flightsReducer;
