import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";

const SubjectItem = ({
  name,
  description,
  avatar,
}: {
  name: string;
  description: string;
  avatar: string;
}) => {
  return (
    <Card style={{ maxWidth: 230, margin: "10px" }}>
      <CardContent>
        <Grid container flexDirection={"column"}>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            mb={"15px"}
            style={{
              backgroundImage: `url(${avatar})`,
              height: "150px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <Grid item mb={"10px"}>
            <Typography fontWeight={158} fontSize={18} textAlign={"center"}>
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              fontWeight={400}
              fontSize={12}
              color="#767676"
              maxWidth={210}
              textAlign={"center"}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SubjectItem;
