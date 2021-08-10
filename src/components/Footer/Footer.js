import { Box, Container, Grid, Link } from '@material-ui/core'

export default function Footer(){
    return <footer>
     <Box
       px={{xs: 3, sm: 10}}
       py={{xs: 5, sm: 10}}
       bgcolor="text.secondary"
       color="white"
     >
         <Container maxwidith="lg">
             <Grid container spacing={5}>
                 <Grid item xs={12} sm={4}>
                     <Box borderBottom={1}>Help</Box>
                     <Box>
                         <Link href="/" color="inherit">
                            Contact
                         </Link>
                     </Box>

                     <Box>
                         <Link href="/" color="inherit">
                            support
                         </Link>
                     </Box>

                     <Box>
                         <Link href="/" color="inherit">
                            Privacy and Security
                         </Link>
                     </Box>

                 </Grid>

                 <Grid item xs={12} sm={4}>
                     <Box borderBottom={1}>Management</Box>
                     <Box>
                         <Link href="/" color="inherit">
                            Student Login
                         </Link>
                     </Box>

                     <Box>
                         <Link href="/" color="inherit">
                            Adimin Login
                         </Link>
                     </Box>

                     <Box>
                         <Link href="/" color="inherit">
                            ICT Team
                         </Link>
                     </Box>

                 </Grid>

                 <Grid item xs={12} sm={4}>
                     <Box borderBottom={1}>Follow us on</Box>
                     <Box>
                         <Link href="/" color="inherit">
                            Twitter
                         </Link>
                     </Box>

                     <Box>
                         <Link href="/" color="inherit">
                            Facebook
                         </Link>
                     </Box>

                     <Box>
                         <Link href="/" color="inherit" >
                            Instagram
                         </Link>
                     </Box>

                 </Grid>

             </Grid>
             <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs:5, sm:0}}>
                 University of Malawi Online Notice Board &reg; {new Date().getFullYear()}
    
             </Box>
            
             
            </Container>
     </Box>
    </footer>
        
    
}
