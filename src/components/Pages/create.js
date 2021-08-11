import { Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        fontSize: 60,
        backgroundColor: 'violet',
        '&:hover':{
            backgroundColor: 'blue'
        }
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    }
})
const create = () => {
    const classes = useStyles()
    return (
        <Container>
            <Typography
             variant ="h6"
             color ="text-secondary"
             component="h2"
             gutterBottom
            >
                Create a new Announcement
            </Typography>
            <Button
              className={classes.btn}  
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon/>}
            
            >
                Submit
            </Button>
            
        </Container>
    )
}

export default create
