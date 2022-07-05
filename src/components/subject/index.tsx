import { Grid, Typography, useTheme } from "@mui/material";

const Subject = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div>
      <Grid container alignItems={"center"} flexDirection="column">
        <Grid item mb={"25px"}>
          <Typography fontWeight={700} variant="h2" fontSize={32} color="textPrimary">
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={400}
            color="#767676"
            fontSize={15}
            maxWidth={400}
            textAlign="center"
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Subject;
