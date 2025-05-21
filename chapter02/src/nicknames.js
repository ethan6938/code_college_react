import React, { Component } from "react";

class Nickname extends Component {
  render() {
    const Nickname = ["ethan", "ethie", "eth"];

    const nicknameloop = Nickname.map((name, index) => {
      return <li key={index}>{name}</li>; 
    });

    return (
      <div>
        <h2>Nicknames:</h2>
        <ul>{nicknameloop}</ul>
      </div>
    );
  }
}

export default Nickname;