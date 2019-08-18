import React from 'react';
import Navigation from './Navigation';

const Header = () => {
     return (
          <header>
               <Navigation />
               <div className="title">
                    <h1>
                         MUSICON
                         <span className="title__slogan">
                              find your best event
                         </span>
                    </h1>
               </div>
          </header>
     );
};

export default Header;
