import React from 'react';
import Form from './Form';
import EventsInfo from './EventsInfo';

const FindEvent = ({ getEvents, events, addEvent }) => {
     return (
          <div className="find_event">
               <Form getEvents={getEvents} />
               <EventsInfo events={events} addEvent={addEvent} />
          </div>
     );
};

export default FindEvent;
