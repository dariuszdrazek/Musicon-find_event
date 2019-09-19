import React from 'react';

const FavoriteEvents = ({ addEvents: { favorite } }) => {
     console.log({ favorite });

     const timer = time => {
          let test = new Date(time);
          const eventTime = test.getTime();
          const today = Date.now();
          let days = Math.floor((eventTime - today) / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
               ((eventTime - today) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor(
               ((eventTime - today) % (1000 * 60 * 60)) / (1000 * 60)
          );
          var seconds = Math.floor(((eventTime - today) % (1000 * 60)) / 1000);

          return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
     };

     return (
          <div className="favoriteEvents">
               <h1>MY Favorite Events</h1>
               <div className="fEvent">
                    <div className="description">
                         {favorite.map((item, index) => {
                              return (
                                   <div className="eventInfo" key={index}>
                                        <div className="author">
                                             {item.lineup[0]}
                                        </div>
                                        <div className="city">
                                             {item.venue.city} /
                                             {item.venue.country}
                                        </div>
                                        <div className="place">
                                             {item.venue.name}
                                        </div>
                                        <hr />
                                        <div className="timer">
                                             {timer(item.datetime)}
                                        </div>
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </div>
     );
};

export default FavoriteEvents;

//localStorage.clear();
