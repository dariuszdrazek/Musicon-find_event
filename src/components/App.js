import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './+Footer';
import '../scss/main.scss';
import Header from './+Header';
import FindEvent from '../containers/FindEvent';
import Navigation from '../components/Navigation';

const App = () => {
     return (
          <div className="App">
               <Router>
                    <Navigation />
                    <Switch>
                         <Route exact path="/" component={Header} />
                         <Route path="/findEvent" component={FindEvent} />
                    </Switch>
               </Router>

               <Footer />
          </div>
     );
};

export default App;
