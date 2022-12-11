// import REACT
import React from 'react';
import {useState} from 'react';

// import REDUX
import { useSelector } from 'react-redux';
//import { selectEmployees } from '../../../src/redux/selector';

// import TABLE COMPONENTS
import DataTable from 'react-data-table-component';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import visuallyHidden from "@mui/utils/visuallyHidden";
//import { TableColumns, createData, getComparator } from "./MUITable.js.js";

// import COMPONENTS
import createRow from './createRow.js';
import createColumns from './createColumns.js';
import getComparator from './orderRow.js';

// import STYLE
import '../../style/EmployeesPageStyle.css';

//JS_______________________
const EmployeesTable = () => {
    const allEmployees = useSelector((state) => state.employees.data);
    console.log("allEmployees",allEmployees)

    const rows = allEmployees.map((data) =>
        createRow(
            data.firstName,
            data.lastName,
            data.birthDate,
            data.startDate,
            data.street,
            data.city,
            data.state,
            data.zipCode,
            data.department
        )
    );
    console.log("rows",rows)

    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("id");
    const [filteredRows, setFilteredRows] = useState(rows);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };
    
    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property);
    };

    const requestSearch = (e) => {
        if (e) {
          const rowsToShow = rows.filter((row) => {
            let rowArray = Object.values(row);
            return rowArray.some(
              (elt) => elt.toString().toLowerCase().indexOf(e.toLowerCase()) >= 0
            );
          });
          setFilteredRows(rowsToShow);
        } else {
          setFilteredRows(rows);
        }
    };

    return (
        <Paper
          sx={{ width: "75%", overflow: "hidden", margin: "2.5em" }}
          align="center"
        >
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            sx={{ margin: "2em" }}
            onChange={(e) => requestSearch(e.target.value.trim())}
          />
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  {createColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sortDirection={orderBy === column.id ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === column.id}
                        direction={orderBy === column.id ? order : "asc"}
                        onClick={createSortHandler(column.id)}
                      >
                        {column.label}
                        {orderBy === column.id ? (
                          <Box component="span" sx={visuallyHidden}>
                            {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                          </Box>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .sort(getComparator(order, orderBy))
                  .map((row, i) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                        {createColumns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={`${column.id}-${i}`}
                              align={column.align}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      );
    };
    
    export default EmployeesTable;
    