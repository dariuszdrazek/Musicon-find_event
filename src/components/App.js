import React from 'react';
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Footer from './+Footer';
import '../scss/main.scss';
import Header from './+Header';

const App = () => {
     return (
          <div className="App">
               <Router>
                    <Header />
               </Router>

               <Footer />
          </div>
     );
};

export default App;
