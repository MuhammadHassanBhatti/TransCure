import React from "react";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TableComponenet from "../../common/TableComponenet";

const MedicationsRefills = () => {
  return (
    <Grid container>
      <Box
        sx={{
          width: "100%",
          margin: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Book an Appointment</h2>
        <Button style={{ marginBottom: "10px" }} variant="contained">
          + Add Appointment
        </Button>
      </Box>

      <TableComponenet />
    </Grid>
  );
};

export default MedicationsRefills;
