import { ADDED_EVENT } from './actions.js';

const initState = {
     favorite: []
};

const addEvents = (state = initState, action) => {
     switch (action.type) {
          case ADDED_EVENT:
               return {
                    favorite: [action.payload]
               };
          // return Object.assign({}, state, {
          //      events: [
          //           ...state.events
          //                .filter('lineup')
          //                .filter(item => item.id !== action.payload.id),
          //           action.payload
          //      ]
          // });

          default:
               return state;
     }
};

export default addEvents;
