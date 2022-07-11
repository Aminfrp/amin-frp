import { Drawer, Grid, useTheme } from "@mui/material";
import SideBar from "./sidebar/Sidebar";
import Body from "./body/Body";
import { useState } from "react";

const Layouts = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = (): any => setOpen((pre) => !pre);
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      style={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.success.dark
            : theme.palette.success.light,
      }}
      p={1}
      id="body"
    >
      <Grid item sm={12} md={2} id="body" xs={12}>
        <div className="desk">
          <SideBar toggleDrawer={toggleDrawer} />
        </div>
        <Drawer anchor={"left"} open={open} onClose={toggleDrawer}>
          <SideBar toggleDrawer={toggleDrawer} />
        </Drawer>
      </Grid>
      <Grid item xs id="body" p={2}>
        <Body toggleDrawer={toggleDrawer} />
      </Grid>
    </Grid>
  );
};

export default Layouts;
