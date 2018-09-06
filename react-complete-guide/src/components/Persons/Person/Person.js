import React, { Component } from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";
import PropTypes from "prop-types";
import { AuthContext } from "../../../containers/App";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    this.inputElement = React.createRef(); // Yeni bir reference olusturuldu. Daha sonra yapman gereken bu reference ile hangi elementin bagli oldugunu react e bildirmek
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => (auth ? <p>I'm authenticated</p> : null)}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement} // inputun ref propü var react tarafından olusturulan buna default olarak fonksiyon atanabiliyor. bu fonksiyon default olarak parametre olarak içinde bulundugu elementi alıyor (DeRS 101)
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );

    // return [
    //   <p key="1" onClick={this.props.click}>
    //     I'm {this.props.name} and I am {this.props.age} years old!
    //   </p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input
    //     key="3"
    //     type="text"
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //   />
    // ];
  }
}

// Sınıf olusturulduktan sonra editliyoruz sınıfı
// propTypes bir javascript objesi tip olarak
// Sadece Class Componentlerde kullanabilirsin
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
