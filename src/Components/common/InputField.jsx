import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputField({
  label,
  variant ="standard",
  margin,
  autoComplete,
  width,
}) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: margin || 1, width: width },
      }}
      noValidate
      autoComplete={autoComplete || "off"}
    >
      <TextField label={label} variant={variant} />
    </Box>
  );
}
