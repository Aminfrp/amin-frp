import { Typography } from "@mui/material";

const Items = ({  name }: { name: string }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body1" fontSize={15} color="#767676">
        <svg width="15" height="15" style={{marginRight:"15px"}} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400"/>
          <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400"/>
          <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400"/>
          <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400"/>
        </svg>
          {name}
        </Typography>
      </div>
    </>
  );
};

export default Items;
