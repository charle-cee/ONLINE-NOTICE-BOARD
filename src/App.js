
import React from 'react'
//import  Grid  from '.components/Grid/Grid';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Card';
import Pages from './components/Pages/Create';
import Pages from './components/Pages/Layout';


const App = () => {
  return (
    <>
        <Navbar/>
        <Pages/>
        <Grid/>
        <Footer/>
      </>
  )
}

export default App
