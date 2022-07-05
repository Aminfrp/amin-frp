import { Grid } from "@mui/material";
import React from "react"
import SideBar from "./sidebar/Sidebar"
import Menue from "./menu/Menu"
import Body from "./body/Body";

const Layouts = () => {
  return (
    <Grid container spacing={2} style={{backgroundColor:"#E1E1E1"}}>
      <Grid item xs={2}>
        <SideBar/>
      </Grid>
      <Grid item xs >
        <Body/>
      </Grid>
      <Grid item xs={.7}>
        <Menue/>
      </Grid>
    </Grid>
  )
}

export default Layouts