import React from 'react';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';

const EventsInfo = ({ events, addEvent }) => {
     const getDay = date => {
          let month = date.substr(5, 2);
          let day = date.substr(8, 2);
          switch (month) {
               case '01':
                    month = 'JAN';
                    break;
               case '02':
                    month = 'FEB';
                    break;
               case '03':
                    month = 'MAR';
                    break;
               case '04':
                    month = 'APR';
                    break;
               case '05':
                    month = 'MAY';
                    break;
               case '06':
                    month = 'JUNE';
                    break;
               case '07':
                    month = 'JULY';
                    break;
               case '08':
                    month = 'AUG';
                    break;
               case '09':
                    month = 'SEPT';
                    break;
               case '10':
                    month = 'OCT';
                    break;
               case '11':
                    month = 'NOV';
                    break;
               case '12':
                    month = 'DEC';
                    break;
               default:
                    return null;
          }
          return `${day}/${month}`;
     };

     return (
          <>
               <table className="events">
                    <caption>information about events</caption>
                    <thead>
                         <tr>
                              <th>When?</th>
                              <th>Location</th>
                              <th>Tickets</th>
                              <th></th>
                              <th></th>
                         </tr>
                    </thead>
                    <tbody>
                         {events.slice(0, 10).map(event => {
                              // let test = new Date(event.datetime);
                              // console.log(test.getTime());
                              return (
                                   <tr key={event.id}>
                                        <td>{getDay(event.datetime)}</td>
                                        <td>
                                             {event.venue.country} /{' '}
                                             {event.venue.city}
                                        </td>
                                        <td>{event.offers[0].status}</td>
                                        <td>
                                             <a href={event.offers[0].url}>
                                                  <Button
                                                       type="button"
                                                       variant="contained"
                                                       color="secondary"
                                                       className="btn">
                                                       Buy Ticket
                                                  </Button>
                                             </a>
                                        </td>
                                        <td>
                                             <Button
                                                  onClick={addEvent(event)}
                                                  type="button"
                                                  variant="contained"
                                                  color="primary"
                                                  className="btn">
                                                  Add Favorite
                                                  <Favorite></Favorite>
                                             </Button>
                                        </td>
                                   </tr>
                              );
                         })}
                    </tbody>
               </table>
          </>
     );
};

export default EventsInfo;
