import { FETCH_EVENTS, FETCHED_EVENTS, FETCHED_ERROR } from './actions.js';

const initState = {
     loading: false,
     events: [],
     error: ''
};

const getEvents = (state = initState, action) => {
     switch (action.type) {
          case FETCH_EVENTS:
               return {
                    ...state,
                    loading: true
               };
          case FETCHED_EVENTS:
               return {
                    loading: false,
                    events: [...action.payload]
               };
          case FETCHED_ERROR:
               return {
                    events: [],
                    loading: false,
                    error: action.payload
               };
          default:
               return state;
     }
};

export default getEvents;
