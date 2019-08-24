import React from 'react';
import Form from './Form';
import EventsInfo from './EventsInfo';

const FindEvent = ({ getEvents, events }) => {
     return (
          <div className="find_event">
               <Form getEvents={getEvents} />
               <EventsInfo events={events} />
          </div>
     );
};

export default FindEvent;
