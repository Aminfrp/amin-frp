import { Card, CardContent, Grid, IconButton } from "@mui/material";
import NightsStayIcon from "@mui/icons-material/NightsStay";

const Menu = () => {
  return (
    <Card>
      <CardContent>
        <Grid container display="flex" flexDirection="column">
          <Grid item display="flex" justifyContent="center" margin="0px 0px 215px 0px">
            <IconButton>
              <NightsStayIcon />
            </IconButton>
          </Grid>
          <Grid item display="flex" justifyContent="center">
            <IconButton>
              <NightsStayIcon />
            </IconButton>
          </Grid>
          <Grid item display="flex" justifyContent="center">
            <IconButton>
              <NightsStayIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Menu;
