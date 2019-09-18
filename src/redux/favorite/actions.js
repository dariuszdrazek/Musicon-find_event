export const ADDED_EVENT = '[favorite] Added favorite';

export const addedEvents = payload => {
     return {
          type: ADDED_EVENT,
          payload
     };
};

export const addFavoriteEvent = query => dispatch => {
     console.log(query);
     // dispatch(startAddEvent());

     dispatch(addedEvents(query));
     // const url = 'http://localhost:3001/favorite';

     // fetch(url, {
     //      method: 'POST',
     //      body: JSON.stringify(event),
     //      headers: {
     //           'Content-Type': 'application/json'
     //      }
     // })
     //      .then(response => response.json())
     //      .then(events => ))
     //      .catch(error => addedEventsError(error));
};
