import React, { Component } from 'react';
import Products from './Products';
import Nicknames from './nicknames';

class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  };

  render() {
    const user = {
      firstName: "ethan",
      lastName: "hurwitz"
    };

    return (
      <div>
        <h1>My First React App!</h1>
        <Products />
        <Nicknames /> {/* ✅ use it here */}
        <h1>Hi there, {this.formatName(user)}!</h1>
      </div>
    );
  }
}

export default App;
