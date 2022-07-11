import { Avatar, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

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
    <Card style={{ maxWidth: 230, margin: "10px",maxHeight:360 }}>
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
          <Grid item style={{textOverflow:"ellipsis",overflow: "hidden"}}>
            <Typography
              fontWeight={400}
              fontSize={12}
              color="#767676"
              maxWidth={210}
              style={{height:"90px",overflow:"hidden"}}
              textAlign={"center"}
              textOverflow="ellipsis"
            >
              {description}
            </Typography>
            <CardActions>
              <Button
                color="secondary"
              >
               <Typography color="secondary" variant="body1" fontSize={12}>learn more</Typography>
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SubjectItem;
