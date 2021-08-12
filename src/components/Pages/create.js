import { Button, Container, Typography } from '@material-ui/core'
import React , { useState} from 'react'
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles, TextField, Radio } from '@material-ui/core';


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
    // btn: {
    //     fontSize: 60,
    //     backgroundColor: 'violet',
    //     '&:hover':{
    //         backgroundColor: 'blue'
    //     }
    // },
    // title: {
    //     textDecoration: 'underline',
    //     marginBottom: 20
    // }
})
const Create = () => {
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [titleError, setTitleError] = useState('false')
    const [DescriptionError, setDescriptionError] = useState('false')
    
    const handleSubmit =(e) => {
        e.Default()

        setTitleError(false)
        setDescription(false)
        
        if (title == ''){
            setTitleError(true)
        }
        if (title == ''){
            setDescriptionError(true)
        }

        if (title && Description) {
            fetch('', {
                method: 'POST',
                headers: {"content-type": "application/json"},
                body: JSON.stringify({title, Description,category})
            }).then(() => history.push('/'))
        }
    }

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
            <form noValidate autoComplete="off" onSubmit= {handleSubmit}>
                <TextField
                  onChange={(e) => setDescription(e.target.value)}
                  classsName={classes.field}
                  label="Note Title"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  required
                />

                <TextField
                  classsName={classes.field}
                  iabel="Description"
                  variant="outlined"
                  color="secondary"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
             <Button
              className={classes.btn}  
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon/>}
             
              >
              Submit
              </Button>
            </form>
            
            
        </Container>
    )
}

export default Create
