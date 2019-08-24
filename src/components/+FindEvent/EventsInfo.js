import React from 'react';

const EventsInfo = ({ events }) => {
     //   const getDay = (date) => {
     //       switch(date)
     //   }

     return (
          <table className="events">
               <caption>information about events</caption>
               <thead>
                    <tr>
                         <th>When?</th>
                         <th>location</th>
                         <th>tickets</th>
                         <th></th>
                         <th></th>
                    </tr>
               </thead>
               <tbody>
                    {events.slice(0, 10).map(event => {
                         return (
                              <tr key={event.id}>
                                   <td>{event.datetime}</td>
                                   <td>
                                        {event.venue.country} /{' '}
                                        {event.venue.city}
                                   </td>
                                   <td>event</td>
                                   <td>
                                        <input
                                             type="button"
                                             value="buy ticket"
                                        />
                                   </td>
                                   <td>
                                        <button>favorite</button>
                                   </td>
                              </tr>
                         );
                    })}
               </tbody>
          </table>
     );
};

export default EventsInfo;
