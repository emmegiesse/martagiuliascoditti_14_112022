// import REACT
import React from 'react';
import {useState} from 'react';

// import REDUX
import { useSelector } from 'react-redux';

// import TABLE COMPONENTS
import { 
    Table, 
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    TableSortLabel } from '@mui/material';

import {
    Paper,
    Box, 
    TextField }  from '@mui/material';

import { visuallyHidden } from '@mui/utils';

// import COMPONENTS
import createRows from './createRows.js';
import createColumns from './createColumns.js';
import getComparator from './orderRow.js';

// import STYLE
import '../../style/EmployeesPageStyle.css';

//JS_______________________
const EmployeesTable = () => {
    const allEmployees = useSelector((state) => state.employees.data);
    console.log("allEmployees",allEmployees)

    const rows = allEmployees.map((data) =>
        createRows(
            data.firstName,
            data.lastName,
            data.startDate,
            data.department,
            data.birthDate,
            data.street,
            data.city,
            data.state,
            data.zipCode,
        )
    );
    console.log("rows",rows)
    
    const [filteredRows, setFilteredRows] = useState(rows);
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("id");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const requestSearch = (e) => {
        if (e) {
            const rowsToShow = rows.filter((row) => {
                let rowArray = Object.values(row);
                return rowArray.some(
                    (elt) => 
                    elt.toString().toLowerCase().indexOf(e.toLowerCase()) >= 0
                );
            });
        setFilteredRows(rowsToShow);
        } else {
            setFilteredRows(rows);
        }
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper
            sx={{ width: "100%", overflow: "hidden", margin: "2.5em" }}
            align="center"
        >
            <div className="table-upper-bar">
                <TextField
                    id="outlined-search"
                    type="search"
                    label="search:"
                    sx={{ margin: "0em" }}
                    onChange={(e) => 
                        requestSearch(e.target.value.trim())}
                />
            </div>
            
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table size="small" stickyHeader>

                    <TableHead>
                        <TableRow>
                            {createColumns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    padding={createColumns.disablePadding ? 'none' : 'normal'}
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
                                    <TableRow hover tabIndex={-1} key={i}>
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
                            }
                        )}
                    </TableBody>
                
                </Table>
            </TableContainer>

            <TablePagination 
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    component="div"
                    rowsPerPage={rowsPerPage}
                    page={page}
                    count={rows.length}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </Paper>
    )
};
    
export default EmployeesTable;
    