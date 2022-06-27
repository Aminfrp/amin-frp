import { Grid, Typography, useTheme } from "@mui/material"

const Info = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={1}>
      <Grid xs={12} display={"flex"} justifyContent={"space-between"} item>
        <Typography variant="body1" fontSize={"15px"} style={{backgroundColor:theme.palette.secondary.main,width:"20%", padding:"2px"}}>
          Age:
        </Typography>
          25
      </Grid>
      <Grid xs={12} display={"flex"} justifyContent={"space-between"} alignItems={"center"} item>
        <Typography variant="body1" fontSize={"15px"} style={{backgroundColor:theme.palette.secondary.main,width:"35%", padding:"2px",height:"25px", marginRight:"5%"}}>
          Address:
        </Typography>
       <p style={{textAlign:"center"}}>iran , shiraz farhangian roshd 20</p> 
      </Grid>
      <Grid xs={12} display={"flex"} justifyContent={"space-between"} item>
        <Typography variant="body1" fontSize={"15px"} style={{backgroundColor:theme.palette.secondary.main,width:"28%", padding:"2px"}}>
          phone:
        </Typography>
        +989305163537
      </Grid>
    </Grid>
  )
}

export default Info