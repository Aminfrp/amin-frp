import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { ColorModeContext } from "../../../../App";
import { useContext } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';

const About = ({ toggleDrawer }: { toggleDrawer: any }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Card style={{ padding: 0 }}>
      <CardContent style={{ padding: 0 }}>
        <Grid container justifyContent={"space-between"} flexDirection={"row-reverse"} py={3} px={4}>
          <Grid item style={{float:"right"}} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode==="dark"? <NightsStayIcon /> :<LightModeIcon />}
          </Grid>
          <Grid item onClick={toggleDrawer} className="mobile">
            <MenuIcon />
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={3} xs={12} item height={460}>
            <img
              src="/no_bg.png"
              alt="profile"
              width={"100%"}
              height={"100%"}
            />
          </Grid>
          <Grid md={8} xs={12} display="flex" p={5} alignItems={"center"} item>
            <Grid container alignItems={"center"}>
              <Grid item mb={"18px"}>
                <Typography variant="h1" fontSize={48} fontWeight={700}>
                  I'm Amin Firouzpour{" "}
                  <span style={{ color: theme.palette.secondary.main }}>
                    Front-end
                  </span>{" "}
                  Developer
                </Typography>
              </Grid>
              <Grid item mb={"25px"}>
                <Typography
                  variant="h1"
                  fontSize={16}
                  fontWeight={400}
                  color="#767676"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates earum blanditiis facilis ullam ipsum illum placeat
                  id repellat, ducimus accusantium repellendus suscipit
                  voluptatibus cum totam consectetur odit at deserunt! Ex.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ width: 150, height: 50 }}
                >
                  <Typography variant="button" fontWeight={600}>
                    HIRE ME <img src="/next.svg" alt="next" />
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
