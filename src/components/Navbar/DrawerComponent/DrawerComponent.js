
import React, { useState} from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    menuIconBar: {
        marginLeft: 'auto',
    }
}))
const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = 
    useState(true);

const classes = useStyles()

   
    return (
        <>
       <Drawer  anchor='right'
        onClose={ () => setOpenDrawer(false)}
        open={openDrawer}>
           <List>
               <ListItem divider button>
                   <ListItemIcon>
                   <ListItemText> Home </ListItemText>
                   </ListItemIcon>
                   
               </ListItem>
               <ListItem divider button>
                   <ListItemIcon>
                   <ListItemText> Recent Events </ListItemText>
                   </ListItemIcon>
                   
               </ListItem>
               <ListItem divider button>
                   <ListItemIcon>
                   <ListItemText> Upcoming Events </ListItemText>
                   </ListItemIcon>
                   
               </ListItem>
               <ListItem divider button>
                   <ListItemIcon>
                   <ListItemText> Latest Events </ListItemText>
                   </ListItemIcon>
                   
               </ListItem>

               <ListItem divider button>
                   <ListItemIcon>
                   <ListItemText> Search </ListItemText>
                   </ListItemIcon>
                   
               </ListItem>
           </List>
       </Drawer>
       <IconButton className={classes.menuIconBar} onClick={() => setOpenDrawer(!openDrawer)}>
           <MenuIcon />
       </IconButton>
       </>
    )
}

export default DrawerComponent;
