import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Dessert extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rows = [
            {name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
            {name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3},
            {name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0},
            {name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
            {name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9}
        ];
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{backgroundColor: "#e20f48"}}>
                            <TableRow>
                                <TableCell style={{color: "white", fontWeight: 'bold'}}>Dessert (100g serving)</TableCell>
                                <TableCell align="right" style={{color: "white", fontWeight: 'bold'}}>Calories</TableCell>
                                <TableCell align="right" style={{color: "white", fontWeight: 'bold'}}>Fat&nbsp;(g)</TableCell>
                                <TableCell align="right" style={{color: "white", fontWeight: 'bold'}}>Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right" style={{color: "white", fontWeight: 'bold'}}>Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" style={{color: "orange"}}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right" style={{color: "#f909f5"}}>{row.calories}</TableCell>
                                    <TableCell align="right" style={{color: "#00ff65"}}>{row.fat}</TableCell>
                                    <TableCell align="right" style={{color: "#0eb7f4"}}>{row.carbs}</TableCell>
                                    <TableCell align="right" style={{color: "#f909f5"}}>{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default Dessert;