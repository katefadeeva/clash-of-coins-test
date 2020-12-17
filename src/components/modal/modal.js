import React, {Component} from 'react';
import HowToGet from "../how-to-get";
import WhatGives from "../what-gives";

import './modal.css';

export default class Modal extends Component {

  clickCross = () => {
    document.querySelector('.modal').style.visibility = 'hidden';
    document.querySelector('.wrapper').style.height = '0';
  }

  render() {
    return (
        <main className="modal">
          <h1>У вас закончились CoC<span onClick={() => {this.clickCross()}} className="header__cross cross"></span></h1>
          <HowToGet />
          <WhatGives />
        </main>
    )
  }
}