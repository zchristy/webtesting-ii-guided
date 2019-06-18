import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PlayersList from './players/PlayersList'

class App extends Component {
  state = {
    greeting: "hello World",
    players: [
      {
        id:1,
        name: 'Zach'
      },
      {
        id:1,
        name: 'Jay'
      }
    ]
  }

  greeting = e => {

    this.setState({
      greeting: "hello developers"
    })
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.greeting}</h2>
        <button onClick={this.greeting}>greet</button>
        <PlayersList players={this.state.players} />
      </div>
    );
  }
}

export default App;
