import {  Container, Grid, Paper, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  
  root: {
   //maxWidth: 345
   minWidth: 225
   
    
  },
  media: {
    height: 140,
    
  },
});


export default function Cards(){  
  

  const classes = useStyles();

    return(
   
<>

<Box p={5}>
    
  <Grid container spacing={10} direction='row' justifyContent='center'>
    <Box color='black' textAlign='Center'>
     
      <Paper > <p >Welcome to the University of Malawi Online Notice Board.
                Get informed and advertise your business, Assicioation ,Clubs and Societies on campus 
                </p>
      </Paper> 
             
    </Box>
  </Grid>
</Box>
  
 <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item xs={12 } sm={6} md={4}>
           
            <Card>
              {/* Card 1 */}
               <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="/images/vitor.jpg"
                        title="Contemplative Reptile"
                      />
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          EMEGENCY PILLS
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Emegency pills available on campus, mistakes can be corrected but regrets are everlasting. Dont stress up call 0888147591ss.
                        </Typography>
                      </CardContent>
                </CardActionArea>
                <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="/images/airobics.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          AIROBICS
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Airobic introduced on campus, with over 1,000 performers, ranging
                          across the whole unima intelligencia.
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
  
              {/* card 2 */}

                   <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="/images/pc.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          NEW COMPUTERS
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          new computers  on campus, over 6000 students to benefit from this initiative during this time of covid.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
            </Card>

            <Card className={classes.root}>

              {/* card 3 */}
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/njotcha.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        HD PICTURES
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        HD photographer available on campus, with 1,000 you can shot on 4 picture. 
                        Our force is our people!!
                        
                      </Typography>
                    </CardContent>
                  </CardActionArea>                         
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>                                      

              {/* card 4     */}
                 <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/images/dress.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      FINALE DINNER FASHION
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Dresses available on compus.Dress proffesionally, look nice and be smart.
                      </Typography>
                    </CardContent>
                  </CardActionArea>                                         
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
           </Card>

          </Grid>

 </Grid>
</>
   )  
}


