
import React from 'react'
//import  Grid  from '.components/Grid/Grid';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Card';
//import {Grid} from "@material-ui/core";


//import { ThemeProvider } from '@material-ui/core';
//import theme from './utils/theme';

const App = () => {
  return (
    <>
        <Navbar/>
         <Grid/>
        <Footer/>
      </>
  )
}

export default App
