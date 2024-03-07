import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import TableComponenet from "../../common/TableComponenet";

const ScheduleAppoinment = () => {
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
        <h2 style={{marginTop:0}}>Book an Appointment</h2>
        <Button style={{marginBottom:"10px"}} variant="contained">+ Add Appointment</Button>
      </Box>

      <TableComponenet />
    </Grid>
  );
};

export default ScheduleAppoinment;
