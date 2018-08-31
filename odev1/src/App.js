import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username:'abcd'
  };

  stateHandler = (event) =>{
    this.setState({
      username:event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput username="mvltsevinc">Mevlut</UserOutput>
        <UserOutput text={this.state.username}>Sevinc</UserOutput>
        <UserInput changed={this.stateHandler} text={this.state.username}/>
      </div>
    );
  }
}

export default App;
