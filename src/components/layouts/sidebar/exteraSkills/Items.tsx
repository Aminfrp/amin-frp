import { Typography, useTheme } from "@mui/material";

const Items = ({ precenge, name }: { precenge: string; name: string }) => {
  const theme = useTheme();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body1" fontSize={15} color="#767676">
          {name}
        </Typography>
        <Typography variant="body1" fontSize={15} color="#767676">
          {precenge}
        </Typography>
      </div>
      <div
        style={{
          height: "2px",
          border: `0.5px solid ${theme.palette.secondary.main}`,
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "1px",
          borderRadius: "30px",
          marginTop: "6px",
        }}
      >
        <div
          style={{
            backgroundColor: theme.palette.secondary.main,
            width: precenge,
            height: "2px",
            borderRadius: "30px",
          }}
        />
      </div>
    </>
  );
};

export default Items;
