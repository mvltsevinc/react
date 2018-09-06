import React from "react";
import classes from "./Cockpit.css";

import Aux from "../../hoc/Aux";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.red].join(" ");
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red','bold']
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>This is working!</p>
      {/*fonksiyona parametre gecirirken bind metodunu kullan o daha iyi performans acisindan*/}
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log in</button>
    </Aux>
  );
};
export default cockpit;
