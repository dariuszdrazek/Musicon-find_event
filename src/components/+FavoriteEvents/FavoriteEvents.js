import React from 'react';

const FavoriteEvents = ({ addEvents: { favorite } }) => {
     console.log({ favorite });

     const timer = () => {
          let test = new Date(favorite[0].datetime);
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
                         <div className="author">{favorite[0].lineup[0]}</div>
                         <div className="city">
                              {favorite[0].venue.city} /
                              {favorite[0].venue.country}
                         </div>
                         <div className="place">{favorite[0].venue.name}</div>
                         <hr />
                         <div className="timer">{timer()}</div>
                    </div>
               </div>
          </div>
     );
};

export default FavoriteEvents;
