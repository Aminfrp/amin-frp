import { Avatar, Grid, useTheme } from '@mui/material';
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
          <FacebookIcon fontSize="small" color='info'/>
        </Avatar>
      </Grid>
      <Grid item onClick={()=>{window.location.href="https://www.linkedin.com/in/amin-firouzpour-8394a8207"}}>
        <Avatar sx={{ width: 30, height: 30 }} style={{backgroundColor:theme.palette.secondary.main}}>
            <LinkedInIcon fontSize="small" color='info'/>
        </Avatar>
      </Grid>
      <Grid item onClick={()=>{window.location.href="https://web.whatsapp.com/aminfrp"}}>
        <Avatar sx={{ width: 30, height: 30 }} style={{backgroundColor:theme.palette.secondary.main}}>
            <WhatsAppIcon fontSize="small" color='info'/>
        </Avatar>
      </Grid>
      <Grid item>
        <Avatar sx={{ width: 30, height: 30 }} style={{backgroundColor:theme.palette.secondary.main}}>
            <InstagramIcon fontSize="small" color='info'/>
        </Avatar>
      </Grid>
    </Grid>
  )
}

export default Socials