import React, {useState} from 'react';
import { AppBar, Tab,Tabs, Typography, Toolbar, Button, Menu, MenuItem ,Grid,Paper,Container,useMediaQuery,useTheme, Box} from '@material-ui/core';   
import DrawerComponent from './DrawerComponent/DrawerComponent';
import HomeIcon from '@material-ui/icons/Home'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Navbar = () => {
    const [value, setValue] = useState(0);
    const [anchorEL, setAnchorEL] =useState(null);

    const handleOpenMenu = e => {
        setAnchorEL(e.currentTarget);

    };

    const handleMenuClose = () => {
        setAnchorEL(null);
    }
    
    
    const handClickTab = (e, newValue) => {
        setValue(newValue);
    };

  //breakpoints
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    return (

  //The header h2 section
     <>
      <AppBar color='primary' border-radius='7px'>
        <Toolbar>

            <Typography     
              margin-height='2%'
              component='center'
              padding='2px'
              aria-setsize='small'
             >
             <h2> UNIMA</h2> 
            </Typography>  
            

         { isMatch  ? (
         <DrawerComponent/> 
         ) : (
           <>
           <Tabs onChange={handClickTab}
           indicatorColor='secondary'
           value={value}>
              <Tab icon={<HomeIcon color="secondary" />} disableRipple label='Home' />
          

              <Tab hrf icon={<EventAvailableIcon color='secondary' />} label='Recent Events' />

          
              <Tab icon={<LowPriorityIcon color='secondary' />}label='Upcoming Events' />
          
              <Tab icon={<NewReleasesIcon color='secondary' />}label='Latest Events' />
               
              <Tab icon={<SearchOutlinedIcon color='secondary' />}label='Search' />
           
           
          </Tabs>
          
        <Button 
          aria-controls='menu'
          onClick={handleOpenMenu}
          variant= 'text' 
          color='secondary'>
              
        </Button>
           </>

         )}
          
        </Toolbar>
      </AppBar>

  {/* Title   */}    
    <Grid container spacing={6} justify="center">
      <Grid item>
        <Box 
         marginTop='12px'
         marginBottom='0px'
         textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs:5, sm:0}}>

          <h2>University of Malawi Online Notice Board </h2>

        </Box>
      </Grid>
      

    
    </Grid>

      
      
       </>
    )
}

export default Navbar
