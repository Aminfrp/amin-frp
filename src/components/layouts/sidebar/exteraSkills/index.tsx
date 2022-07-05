import { Grid, Typography } from "@mui/material"
import Items from "./Items"

const ExtraSkills = () => {
  return (
    <Grid container flexDirection="column">
      <Grid item mb={"15px"}>
        <Typography variant="h4" fontSize={18} fontWeight={45}>Extera Skills</Typography>
      </Grid>
      {/* skills */}
      <Grid item>
        <Items name={"Bootstrap, Material UI, Pwa"} />
      </Grid>
      <Grid item mt={"11px"}>
        <Items name={"Redux, Vuex, React Query, Websocket, Vuetify"} />
      </Grid>
      <Grid item mt={"11px"}>
        <Items name={"NodeJs, Express, Nestjs, Flutter, Dart"} />
      </Grid>
    </Grid>
  )
}

export default ExtraSkills