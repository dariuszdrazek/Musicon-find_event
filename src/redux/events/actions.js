import { getEventsUrl } from '../../config';

export const FETCH_EVENTS = '[events] Fetching events';
export const FETCHED_EVENTS = '[events] Fetched events';
export const FETCHED_ERROR = '[events] Fetched events ERROR';

export const startFetching = () => {
     return {
          type: FETCH_EVENTS
     };
};

export const fetchedEvents = payload => {
     return {
          type: FETCHED_EVENTS,
          payload
     };
};

export const fetchedEventsError = payload => {
     return {
          type: FETCHED_ERROR,
          payload
     };
};

export const fetchEvents = query => dispatch => {
     dispatch(startFetching());
     fetch(getEventsUrl(query))
          .then(response => response.json())
          .then(events => dispatch(fetchedEvents(events)))
          .catch(error => fetchedEventsError(error));
};
