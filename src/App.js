import React, { Component } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
    animationTiming: { enter: 400, exit: 1000 },
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <CSSTransition
          in={this.state.modalIsOpen}
          timeout={this.state.animationTiming}
          mountOnEnter
          unmountOnExit
          classNames="fade-slide"
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </CSSTransition>
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
