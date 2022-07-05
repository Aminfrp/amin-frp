import { Typography } from "@mui/material";

const Items = ({  name }: { name: string }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body1" fontSize={15} color="#767676">
        <img src={"icons.svg"} alt="extera" style={{marginRight:"15px"}}/>
          {name}
        </Typography>
      </div>
    </>
  );
};

export default Items;
