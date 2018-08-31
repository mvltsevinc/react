import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name:'Max', age:28 },
      { name:'Manu', age:29 },
      { name:'Stephanie', age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  

  switchNameHandler = (newName) => {
    /*DONT do this React state değişkeninin direkt bu şekilde değiştirilmesini kabul etmez.
     this.state.persons[0].name ='Mevlut';*/

     /* SetState update yaparken state önceki haliyle merge eder.
     Yani bir propertyde degisiklik yaptigin diger property aynen kalir.
     Sadece degisiklik yaptiginin degeri degisir. */

     // Setstate parametre olarak bir object alır
    this.setState({
      persons: [
        { name: newName, age:28 },
        { name:'Manu', age:29 },
        { name:'Stephanie', age:27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age:28 },
        { name: event.target.value, age:29 },
        { name:'Stephanie', age:26 }
      ]
    })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
                      name={person.name}
                      age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is working!</p>
        {/*fonksiyona parametre gecirirken bind metodunu kullan o daha iyi performans acisindan*/}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello'));
  }
}

export default App;
