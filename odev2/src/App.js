import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import validation from './Validation/Validation';

class App extends Component {
  state = {
    inputText : ''
  }

  textChangeHandler = (event) => {
    this.setState({inputText : event.target.value});
  }



  render() {
    let mesajLenth = this.state.inputText.length;
    let uyari = '';
    if(mesajLenth < 5)
    {
      uyari = 'Kısa';
    }
    else{
      uyari = 'Uzun';
    }


    return (
      <div className="App">
        <input type="text" onChange={this.textChangeHandler} value={this.state.inputText}/>
        <p>{this.state.inputText}</p>
        <Validation textLength={this.state.inputText.length} mesaj={uyari}/>
      </div>
    );
  }
}

export default App;
