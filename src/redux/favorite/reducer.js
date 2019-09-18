import { ADD_EVENT, ADDED_EVENT, ERROR } from './actions.js';

const initState = {
     loading: false,
     events: [],
     error: ''
};

const addEvents = (state = initState, action) => {
     switch (action.type) {
          case ADD_EVENT:
               return {
                    ...state,
                    loading: true
               };
          case ADDED_EVENT:
               return {
                    loading: false,
                    events: [...action.payload]
               };
          case ERROR:
               return {
                    events: [],
                    loading: false,
                    error: action.payload
               };
          default:
               return state;
     }
};

export default addEvents;
