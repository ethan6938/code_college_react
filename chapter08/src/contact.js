import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { name: 'Alice', email: 'alice@example.com', subject: 'Help', message: 'Need help with my account.' },
        { name: 'Bob', email: 'bob@example.com', subject: 'Feedback', message: 'Love the app!' },
        { name: 'Eve', email: 'eve@example.com', subject: 'Bug', message: 'Found a bug on login.' }
      ]
    };
  }

  render() {
    return (
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
        <h2 style={{ textAlign: 'center', color: '#e20f48', marginBottom: '20px' }}>Contact Messages</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="contact table">
            <TableHead style={{ backgroundColor: '#e20f48' }}>
              <TableRow>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Subject</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.messages.map((msg, index) => (
                <TableRow key={index}>
                  <TableCell style={{ color: 'orange' }}>{msg.name}</TableCell>
                  <TableCell style={{ color: '#0eb7f4' }}>{msg.email}</TableCell>
                  <TableCell style={{ color: '#00ff65' }}>{msg.subject}</TableCell>
                  <TableCell style={{ color: '#f909f5' }}>{msg.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Thank you"
            style={{ width: 120, height: 'auto' }}
          />
          <p style={{ fontSize: 18, color: '#e20f48', marginTop: 10 }}>Thank you!</p>
        </div>
      </div>
    );
  }
}

export default Contact;
