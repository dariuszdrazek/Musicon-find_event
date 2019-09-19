import { ADDED_EVENT } from './actions.js';

const initState = {
     favorite: []
};

const addEvents = (state = initState, action) => {
     switch (action.type) {
          case ADDED_EVENT:
               // return Object.assign({}, state, {
               //      favorite: [
               //           ...state.favorite
               //                .filter('offers')
               //                .filter(item => item.id !== action.payload.id),
               //           action.payload
               //      ]
               // });

               return {
                    favorite: [...state.favorite, action.payload]
               };

          default:
               return state;
     }
};

export default addEvents;
