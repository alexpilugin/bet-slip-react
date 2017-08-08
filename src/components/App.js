import React, { Component } from 'react';
import 'whatwg-fetch'; //polyfill fetch() for Safari
import './styles/App.css';
import BetSlip from './BetSlip';
import PlayerList from './PlayerList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
      players: []
    }
  }

  componentWillMount() {
    const url = "./data/players.json";
    this.loadData(url, this.processDataOnSuccess);
  }

  loadData = (url, success) => {
    return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(this.checkResponseStatus)
      .then((res) => res.json())
      .then(success);
  }

  processDataOnSuccess = (json) => {
    let temp = [];

    json.players.forEach( (el, index) => {
      temp.push({...el, incMode: false, id: index})
    });

    this.setState({ players: temp });
    //console.log(temp);
  }

  checkResponseStatus = (response) => {
    if (response.ok && response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  updateCounter = (player) => {
    let newPlayers = this.state.players.slice();

    newPlayers[player.id].incMode = !newPlayers[player.id].incMode;
    let newPrice = newPlayers[player.id].incMode ? newPlayers[player.id].price : -newPlayers[player.id].price;

    this.setState({ counter : this.state.counter + newPrice, players: newPlayers});
  }

  render() {
    if(!this.state.players.length) return (<div>DATA NOT FOUND!</div>)
    return (
      <div className="App">
        <BetSlip 
          title="BET SLIP"
          value={this.state.counter} 
        />
        <PlayerList 
          title="UPCOMING FAVORITS"
          players={this.state.players}
          updateCounter={this.updateCounter}
        />

      </div>
    );
  }
}

export default App;
