import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#800000",
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

const column = [
  { name: "Serial No.", align: "center" },
  { name: "Name", align: "left" },
  { name: "Age", align: "right" },
  { name: "Gender", align: "left" },
  { name: "Blood Type", align: "left" },
  { name: "Weight", align: "right" },
  { name: "Donation Date", align: "right" },
];

const Records = ({ data, searchQuery, currentUser }) => {
  return (
    <div className="records">
      <h1 className="text-center">List of Donors</h1>
      {searchQuery && (
        <p className="text-center" style={{ color: "gray" }}>
          Donors For Blood Type {searchQuery}
        </p>
      )}

      <TableContainer component={Paper}>
        <Table
          sx={{ margin: "auto", marginTop: "2rem", marginBottom: "2rem", width: "85%" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              {column.map((item, i) => (
                <StyledTableCell key={i} align={item.align}>
                  {item.name}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, i) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" align="center">
                  {i + 1}
                </StyledTableCell>
                <StyledTableCell align="left">{item.name}</StyledTableCell>
                <StyledTableCell align="right">{item.age}</StyledTableCell>
                <StyledTableCell align="left">{item.gender}</StyledTableCell>
                <StyledTableCell align="left">{item.bloodType}</StyledTableCell>
                <StyledTableCell align="right">{item.weight} KG</StyledTableCell>
                <StyledTableCell align="right">{item.donationDate}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Records;
