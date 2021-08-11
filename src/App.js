import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Announcements from './components/announcements';


function App() {
  

  return (
    <div className="body">
      <Router>
      <Header /> 
      <Switch> <Route path='/' /> </Switch> 
      </Router>
      <Announcements />
      <Footer />
      </div>
  );
}

export default App;
