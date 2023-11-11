import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Stack} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";
import DeleteConfirmationDialog from "./deleteConfirmationDialog";
import EditEventDrawer from "./editEventDrawer";
import SeeDetailsDialog from "./seeDetailsDialog";

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

function createData(name, location, date, time, details) {
    return { name, location, date, time, details };
}

const rows = [
    createData('Predstava "Novi život', "Hrvatsko kazalište Travnik u Jankovićima", "05.03.2023.", "19:30", "Predstava 'KRUGOVI' inspirirano djelima Ive Andrića u izvedbi Kazališta slijepih i slabovidnih `Novi život` Zagreb, režija Mario Kovač."),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function EventsTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="right">Location</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                        <StyledTableCell align="right">Time</StyledTableCell>
                        <StyledTableCell align="center">Details</StyledTableCell>
                        <StyledTableCell align="left">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.location}</StyledTableCell>
                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                            <StyledTableCell align="right">{row.time}</StyledTableCell>
                            <StyledTableCell align="right"><SeeDetailsDialog details={row.details}/></StyledTableCell>
                            <StyledTableCell>
                                <Stack direction="row" spacing={1}>
                                    <EditEventDrawer/>
                                    <DeleteConfirmationDialog/>
                                </Stack>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}