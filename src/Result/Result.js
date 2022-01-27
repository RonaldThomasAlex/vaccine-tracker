import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { NoDataFound } from "./NoDataFound";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "grey",
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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function Result(props) {
  return props?.data?.centers.length > 0 ? (
    <TableContainer
      sx={{ width: { md: 1000 }, margin: "auto", marginTop: "20px" }}
      component={Paper}
    >
      <Table aria-label="simple table" sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" width="115px">
              Center
            </StyledTableCell>
            <StyledTableCell align="center" width="115px">
              Date
            </StyledTableCell>
            <StyledTableCell align="center" width="115px">
              Name
            </StyledTableCell>
            <StyledTableCell align="center" width="115px">
              Availability
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.data?.centers.map((center) =>
            center?.sessions.map((session) => (
              <StyledTableRow
                key={session.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" width="115px">
                  {center.name}
                </TableCell>
                <TableCell align="center" width="115px">
                  {session.date}
                </TableCell>
                <TableCell align="center" width="115px">
                  {session.vaccine}
                </TableCell>
                <TableCell align="center" width="115px">
                  {session.available_capacity}
                </TableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <NoDataFound />
  );
}
