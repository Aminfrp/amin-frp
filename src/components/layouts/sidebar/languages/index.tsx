import { Grid, Typography } from "@mui/material"
import Items from "./Items"

const Langueages = () => {
  return (
    <Grid container flexDirection="column">
      <Grid item mb={"15px"}>
        <Typography variant="h4" fontSize={18} fontWeight={45}>Languages</Typography>
      </Grid>
      {/* languages */}
      <Grid item>
        <Items precenge={"80%"} name={"English"} />
      </Grid>
      <Grid item mt={"11px"}>
        <Items precenge={"100%"} name={"Persian"} />
      </Grid>
    </Grid>
  )
}

export default Langueages