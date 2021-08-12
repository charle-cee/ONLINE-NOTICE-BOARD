import { Drawer,  Typography,List, ListItem, ListItemIcon,ListItemText } from "@material-ui/core"
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons"
import {useHistory, useLocation} from 'react-router-dom'
const drawerWidth = 240
const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth

    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    }
})


export default function Layout({children}){
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const MenuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color ="secondary"/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color ="secondary"/>,
            path: '/create'
        },
    ]  

    return (
        <div>

            {/* side drawer */}
            <Drawer
             className={classes.drawer}
             variant="permanent"
             anchor="left"
             classes={{ paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant ="h5">
                        Online Announcement
                    </Typography>
                </div>
                <List>
                    {MenuItems.map(item =>(
                        <ListItem
                         button
                         key={item.text}
                         onClick={() => history.push(item.path)}
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText primary= {item.text}/>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

