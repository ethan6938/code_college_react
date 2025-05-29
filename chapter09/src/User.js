import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Table, Button, Modal } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';



class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showDeleteDialog: false,
      selectedUser: {}
    };
    this.add = this.add.bind(this);
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    firebase.database().ref('/users')  // assuming users stored here
      .on('value', snapshot => {
        const returnArr = [];

        snapshot.forEach(data => {
          const val = data.val();

          const user = (typeof val === 'object' && val !== null)
            ? { ...val, id: data.key }
            : { value: val, id: data.key };

          returnArr.push(user);
        });

        this.setState({ users: returnArr });
      });
  }

  add() {
    this.props.history.push("/add");  // now will work with withRouter
  }

  openDeleteDialog(user) {
    this.setState({
      showDeleteDialog: true,
      selectedUser: user
    });
  }

  closeDeleteDialog() {
    this.setState({
      showDeleteDialog: false,
      selectedUser: {}
    });
  }

  delete() {
    firebase.database().ref('/users/' + this.state.selectedUser.id).remove()
      .then(() => {
        console.log("SUCCESS");
        this.closeDeleteDialog();
      })
      .catch(error => {
        alert("Could not delete the user.");
        console.log("ERROR", error);
      });
  }

  render() {
    const listUsers = this.state.users.map(user => (
      <tr key={user.id}>
        <td>{user.username || ''}</td>
        <td>{user.email || ''}</td>
        <td>{user.username ? <Link to={`/edit/${user.id}`}>Edit</Link> : '—'}</td>
        <td>{user.username ? <Button onClick={() => this.openDeleteDialog(user)}>Remove</Button> : '—'}</td>
      </tr>
    ));

    return (
      <div>
        <Button variant="primary" onClick={this.add}>Add</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {listUsers}
          </tbody>
        </Table>
        <Modal show={this.state.showDeleteDialog} onHide={this.closeDeleteDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete {this.state.selectedUser.username || this.state.selectedUser.value || 'this user'}?</p>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.delete}>Delete</Button>
            <Button variant="secondary" onClick={this.closeDeleteDialog}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default withRouter(User);
