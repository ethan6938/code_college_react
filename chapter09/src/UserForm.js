import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

class UserList extends Component {
  state = {
    users: [],
    newUsername: '',
    newEmail: '',
  };

  componentDidMount() {
    // Fetch users from Firebase
    firebase.database().ref('/').on('value', snapshot => {
      const users = [];
      snapshot.forEach(childSnapshot => {
        const val = childSnapshot.val();
        const user = (typeof val === 'object' && val !== null)
          ? { ...val, key: childSnapshot.key }
          : { value: val, key: childSnapshot.key };
        users.push(user);
      });
      this.setState({ users });
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addUser = e => {
    e.preventDefault();
    const { newUsername, newEmail } = this.state;

    if (!newUsername) {
      alert("Username is required");
      return;
    }

    // Push new user to Firebase database
    firebase.database().ref('/').push({
      username: newUsername,
      email: newEmail
    })
    .then(() => {
      this.setState({ newUsername: '', newEmail: '' }); // Clear form
    })
    .catch(error => {
      alert("Error adding user: " + error.message);
    });
  };

  render() {
    const { users, newUsername, newEmail } = this.state;

    return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map(user => (
            <li key={user.key}>
              {user.username 
                ? `${user.username} (${user.email || 'No email'})`
                : ``}
            </li>
          ))}
        </ul>

        <h2>Add New User</h2>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="newUsername"
            placeholder="Username"
            value={newUsername}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="newEmail"
            placeholder="Email (optional)"
            value={newEmail}
            onChange={this.handleChange}
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}

export default UserList;
