import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
const ScheduleAppoinment = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={5} lg={5}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            border: "solid 1px #B6B6B4",
            width: "80%",
            "& .MuiInput-underline:before": {
              borderBottom: "none",
            },
          }}
        >
          <AccountCircle
            sx={{ color: "action.active", mr: 1, ml: 0.3, my: 0.8 }}
          />
          <TextField
            style={{ width: "100%" }}
            label="Enter Name here ..."
            variant="standard"
          />
        </Box>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Rafferal only (No appointment)"
          />
        </FormGroup>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DateRangeCalendar", "DateRangeCalendar"]}
          >
            <DemoItem label="1 calendar">
              <DateRangeCalendar calendars={1} />
            </DemoItem>
            <DemoItem label="2 calendars">
              <DateRangeCalendar calendars={2} />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider> */}
      </Grid>

      <Grid item xs={12} sm={6} md={7} lg={7}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        asperiores veniam consectetur iusto vel. Quos beatae architecto
        accusamus deserunt, distinctio corporis esse quibusdam? Veritatis
        architecto velit, repellat a vel temporibus!
      </Grid>
    </Grid>
  );
};

export default ScheduleAppoinment;
