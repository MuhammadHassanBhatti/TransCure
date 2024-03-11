import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TableComponenet from "../../common/TableComponenet";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../common/CustomModal";
import InputField from "../../common/InputField";

const ScheduleAppoinment = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <CustomModal setOpen={setOpen} open={open} title={"Add Appointment"}>
        <InputField label="Name" width="100%" />
        <InputField label="Age" width="100%" />
        <InputField label="Gender" width="100%" />
      </CustomModal>
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
          <Button
            style={{ marginBottom: "10px" }}
            variant="contained"
            onClick={handleOpen}
          >
            + Add Appointment
          </Button>
        </Box>

        <TableComponenet />
      </Grid>
    </>
  );
};

export default ScheduleAppoinment;
