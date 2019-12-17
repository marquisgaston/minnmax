import React from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import MinnMaxNavbar from './components/Navbar/minnmaxnavbar';

import { Router, Route, Switch } from "react-router-dom";
import history from './history';
import Footer from './components/footer/footer';
import PatreonInfo from './components/patreon-info';



function App() {
  return (
    <Router history={history}>
      <div className="App">
        <MinnMaxNavbar/>
          <Switch>
            <Route path='/' exact component={Homepage}/>>

            <Router path='/patreon' exact component={PatreonInfo}/>            
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
