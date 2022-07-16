import { Avatar, Grid, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
const Socials = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={2} justifyContent={"center"} mb={"25px"}>
      <Grid item onClick={()=>{window.location.href="https://www.facebook.com/profile.php?id=100008454552028"}}>
        <Avatar sx={{ width: 30, height: 30 }} style={{backgroundColor:theme.palette.secondary.main}}>
          <IconButton>
            <FacebookIcon fontSize="small" color='info'/>
          </IconButton>
        </Avatar>
      </Grid>
      <Grid item onClick={()=>{window.location.href="https://www.linkedin.com/in/amin-firouzpour-8394a8207"}}>
        <Avatar sx={{ width: 30, height: 30 }} style={{backgroundColor:theme.palette.secondary.main}}>
          <IconButton>
            <LinkedInIcon fontSize="small" color='info'/>
          </IconButton>
        </Avatar>
      </Grid>
      <Grid item onClick={()=>{window.location.href="https://wa.me/+989175353201"}}>
        <Avatar sx={{ width: 30, height: 30 }} style={{backgroundColor:theme.palette.secondary.main}}>
          <IconButton>
            <WhatsAppIcon fontSize="small" color='info'/>
          </IconButton>
        </Avatar>
      </Grid>
      <Grid item>
        <Avatar sx={{ width: 30, height: 30 }} style={{backgroundColor:theme.palette.secondary.main}}>
          <IconButton>
            <InstagramIcon fontSize="small" color='info'/>
          </IconButton>
        </Avatar>
      </Grid>
    </Grid>
  )
}

export default Socials