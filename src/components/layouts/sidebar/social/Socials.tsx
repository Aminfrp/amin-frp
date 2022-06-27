import { Avatar, Grid, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
const Socials = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={2} justifyContent={"center"} mb={"25px"}>
      <Grid item>
        <Avatar sx={{ width: 30, height: 30 }} style={{backgroundColor:theme.palette.secondary.main}}>
          <FacebookIcon fontSize="small" color='info'/>
        </Avatar>
      </Grid>
      <Grid item>
        <Avatar sx={{ width: 30, height: 30 }} style={{backgroundColor:theme.palette.secondary.main}}>
            <LinkedInIcon fontSize="small" color='info'/>
        </Avatar>
      </Grid>
      <Grid item>
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