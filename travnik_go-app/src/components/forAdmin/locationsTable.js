import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Stack} from "@mui/material";
import DeleteConfirmationDialog from "./deleteConfirmationDialog";
import EditLocationDrawer from "./editLocationDrawer";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'gray',
        color: theme.palette.common.white,
        padding: '11px',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function LocationsTable(props) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Details</StyledTableCell>
                        <StyledTableCell align="center">Address</StyledTableCell>
                        <StyledTableCell align="right">Latitude</StyledTableCell>
                        <StyledTableCell align="right">Longitude</StyledTableCell>
                        <StyledTableCell align="left">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.locations.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell align="center">{row.details}</StyledTableCell>
                            <StyledTableCell align="center">{row.adress}</StyledTableCell>
                            <StyledTableCell align="right">{row.latitude}</StyledTableCell>
                            <StyledTableCell align="right">{row.longitude}</StyledTableCell>
                            <StyledTableCell>
                                <Stack direction="row" spacing={1}>
                                    <EditLocationDrawer kod={row.id} getLocations={props.getLocations} setLocations={props.setLocations}/>
                                    <DeleteConfirmationDialog kod={row.id} getLocations={props.getLocations} setLocations={props.setLocations}/>
                                </Stack>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}