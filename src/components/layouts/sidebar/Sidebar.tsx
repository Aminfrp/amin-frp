import { Avatar, Card, CardContent, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ExtraSkills from './exteraSkills';
import Info from './info/Info';
import Langueages from './languages';
import Skills from './skills';
import Socials from './social/Socials';

const Sidebar = () => {
  return (
  <Card variant="outlined">
    <CardContent sx={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center"
    }}>
      <Avatar alt="Remy Sharp" src="/profile.jpeg" imgProps={{style:{objectFit:"fill",height:"140%"}}} sx={{ width: 160, height: 160 }}/>
      <Typography variant="h4" fontSize={"18px"} mt={"31px"} mb={"15px"}>
        Amin Firouzpour
      </Typography>
      <Typography variant='body1' fontSize={"15px"}  color={"#767676"} mb={"15px"}>
        Front-End Developer
      </Typography>
      <Socials />
      <Divider variant="middle" style={{ width:"100%", marginBottom:"26px"}} />
      <Info />
      <Divider variant="middle" style={{ width:"100%", margin:"25px 0"}} />
      <Langueages />
      <Divider variant="middle" style={{ width:"100%", margin:"26px 0"}} />
      <Skills />
      <Divider variant="middle" style={{ width:"100%", margin:"26px 0"}} />
      <ExtraSkills />
    </CardContent>
  </Card>
  )
}

export default Sidebar