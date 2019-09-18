import React from 'react';
import { NavLink } from 'react-router-dom';
import LibraryMusic from '@material-ui/icons/LibraryMusic';

const Navigation = () => {
     return (
          <nav>
               <div className="logo">
                    <LibraryMusic>library_music</LibraryMusic>
                    musicon
               </div>
               <ul className="menu">
                    <li className="menu__item">
                         <NavLink to="/" className="menu__link">
                              Home
                         </NavLink>
                    </li>
                    <li className="menu__item">
                         <NavLink to="/findEvent" className="menu__link">
                              Events
                         </NavLink>
                    </li>
                    <li className="menu__item">
                         <NavLink to="/favoriteEvents" className="menu__link">
                              Favorite Event
                         </NavLink>
                    </li>
               </ul>
          </nav>
     );
};

export default Navigation;
