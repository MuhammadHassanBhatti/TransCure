import * as React from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const theme = createTheme({
  palette: {
    common: {
      purple: "#842d73",
      black: "#000",
      white: "#fff",
      // Add other colors if needed...
    },
    // Add other palette options...
  },
  // Add other theme options...
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.purple,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, age, gender, availability,confirmed,contact) {
  return {name, age, gender, availability,confirmed,contact };
}

const rows = [
  createData("Stella Copper", 31, "Female", "9:00-10:00","Yes", "(555) 555-1234"),
  createData("Randell Howard",28, "Male", "9:00-10:00","Pending", "(555) 555-1234"),
  createData("Max Murphy", 31, "Female", "9:00-10:00","Yes", "(555) 555-1234"),
  createData("Rose Mary Watson", 45, "Female", "9:00-10:00","No", "(555) 555-1234"),
  createData("Courtney Jones", 27, "Male", "9:00-10:00","Pending", "(555) 555-1234"),
  createData("Stella Copper", 31, "Female", "9:00-10:00","Yes", "(555) 555-1234"),
  createData("Randell Howard",28, "Male", "9:00-10:00", "No","(555) 555-1234"),
  createData("Max Murphy", 31, "Female", "9:00-10:00","Pending", "(555) 555-1234"),
  createData("Rose Mary Watson", 45, "Female", "9:00-10:00","Yes", "(555) 555-1234"),
  createData("Courtney Jones", 27, "Male", "9:00-10:00","No", "(555) 555-1234"),

];

export default function TableComponent() {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Availability</StyledTableCell>
              <StyledTableCell align="right">Confirmed ?</StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.age}</StyledTableCell>
                <StyledTableCell align="right">{row.gender}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.availability}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.confirmed}
                </StyledTableCell>
                <StyledTableCell align="right">{row.contact}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
