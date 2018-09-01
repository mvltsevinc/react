import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'1', name:'Max', age:28 },
      { id:'2', name:'Manu', age:29 },
      { id:'3', name:'Stephanie', age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //Parametresiz splice fonksiyonu array kopyalar return olarak yeni arrayi döner.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                      click={() => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover']= {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    //let classes = ['red','bold'].join(' '); // classes'a  "red bold" şeklinde string atanir.

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');  // classes = ['red','bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello</h1>
          <p className={classes.join(' ')}>This is working!</p>
          {/*fonksiyona parametre gecirirken bind metodunu kullan o daha iyi performans acisindan*/}
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      </StyleRoot>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello'));
  }
}

export default Radium(App);
