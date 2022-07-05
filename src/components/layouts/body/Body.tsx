import Subject from "../../subject";
import SubjectItem from "../../subjectItem";
import About from "./about";
import { Grid } from "@mui/material";
type Props = {
  children?: JSX.Element;
  toggleDrawer:any
};

const Body: React.FC<Props> = (props:Props) => {
  return (
    <>
      <About toggleDrawer={props.toggleDrawer} />
      {/* univercity */}
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item my={"70px"}>
          <Subject
            name="My College"
            description="
        These are my universities in Shiraz and these universities are among the best universities in this city"
          />
        </Grid>
        <Grid container justifyContent={"center"} spacing={2}>
          <SubjectItem
            name={"Azad Shiraz"}
            description={
              "The Islamic Azad University, Shiraz Branch (Persian: دانشگاه آزاد اسلامی واحد شیراز, Danushgah-e Âzad-e Eslâmi-ye Vahed-e Shiraz) is a private university located in Shiraz, Iran."
            }
            avatar={"/dariyoon.jpg"}
          />

          <SubjectItem
            name={"Bahonar Shiraz"}
            description={
              "Shiraz University (Persian: دانشگاه شیراز Dāneshgāh-e-Shirāz, formerly known as Pahlavi University دانشگاه پهلوی Dāneshgāh-e Pahlavi) is a public university located in Shiraz, Fars, Iran, established in 1946. Being one of the oldest and most prestigious modern universities in Iran"
            }
            avatar={"/bahonar.jpg"}
          />
        </Grid>
      </Grid>
      {/* exprience */}
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item my={"70px"}>
          <Subject
            name="Experiences"
            description="
        These are my universities in Shiraz and these universities are among the best universities in this city"
          />
        </Grid>
        <Grid container justifyContent={"center"} spacing={2}>
          <SubjectItem
            name={"Novin.dev"}
            description={
              "Novin Dev is a software company trying to reach international standards in development in order to make it's way in international market and to serve it's employees to the highest potentials"
            }
            avatar={"/Novin.svg"}
          />

          <SubjectItem
            name={"Ati Shahr"}
            description={
              "Shiraz University (Persian: دانشگاه شیراز Dāneshgāh-e-Shirāz, formerly known as Pahlavi University دانشگاه پهلوی Dāneshgāh-e Pahlavi) is a public university located in Shiraz, Fars, Iran, established in 1946. Being one of the oldest and most prestigious modern universities in Iran"
            }
            avatar={"/ati.png"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Body;
