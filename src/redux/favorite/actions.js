export const ADD_EVENT = '[favorite] Add favorite';
export const ADDED_EVENT = '[favorite] Added favorite';
export const ERROR = '[favorite] Add favorite ERROR';

export const startAddEvent = () => {
     return {
          type: ADD_EVENT
     };
};

export const addedEvents = payload => {
     return {
          type: ADDED_EVENT,
          payload
     };
};

export const addedEventsError = payload => {
     return {
          type: ERROR,
          payload
     };
};

export const addFavoriteEvent = query => dispatch => {
     dispatch(startAddEvent());
     const url = 'http://localhost:3000/favorite';
     fetch(url, {
          method: 'POST',
          body: JSON.stringify(query),
          headers: {
               'Content-Type': 'application/json'
          }
     })
          .then(response => response.json())
          .then(events => dispatch(addedEvents(events)))
          .catch(error => addedEventsError(error));
};
