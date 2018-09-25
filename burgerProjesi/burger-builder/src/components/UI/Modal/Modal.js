import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Auxs/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

  shouldComponentUpdate(nextProps,nextState){
    return nextProps.show !== this.props.show; // Modal ekranda gorünüyorken update yapsın yoksa gerek yok yapmasına
  }

  componentWillUpdate(){
    console.log("[Modal] WillUpdate");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
