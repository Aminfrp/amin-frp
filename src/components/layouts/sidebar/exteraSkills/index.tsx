import { Grid, Typography } from "@mui/material"
import Items from "./Items"

const Skills = () => {
  return (
    <Grid container flexDirection="column">
      <Grid item mb={"15px"}>
        <Typography variant="h4" fontSize={18} fontWeight={45}>Skills</Typography>
      </Grid>
      {/* skills */}
      <Grid item>
        <Items precenge={"100%"} name={"HTML"} />
      </Grid>
      <Grid item mt={"11px"}>
        <Items precenge={"100%"} name={"Css"} />
      </Grid>
      <Grid item mt={"11px"}>
        <Items precenge={"100%"} name={"Javascript"} />
      </Grid>
      <Grid item mt={"11px"}>
        <Items precenge={"100%"} name={"React JS"} />
      </Grid>
      <Grid item mt={"11px"}>
        <Items precenge={"100%"} name={"Vue js"} />
      </Grid>
      <Grid item mt={"11px"}>
        <Items precenge={"87%"} name={"Git"} />
      </Grid>
      <Grid item mt={"11px"}>
        <Items precenge={"95%"} name={"Next JS"} />
      </Grid>
      <Grid item mt={"11px"}>
        <Items precenge={"70%"} name={"SEO"} />
      </Grid>
    </Grid>
  )
}

export default Skills