import React, {Component} from 'react';
import Modal from "../modal";

import './app.css';

export default class App extends Component {

  state = {
    modal: false
  }

  componentDidMount() {
    this.addModal();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.modal !== prevState.modal) {
      this.setState((state) => {
        return {
          modal: state.modal
        }
      })
    }
  }

  addModal = () => {
    setTimeout(() => {
      this.setState(() => {
        return {
          modal: true
        }
      });
      document.querySelector('.wrapper').style.height = '100vh';
    }, 1000);
  }

  render() {
    const { modal } = this.state;
    return (
        <div className="wrapper">
          {modal ? <Modal /> : null}
        </div>
    )
  }
}