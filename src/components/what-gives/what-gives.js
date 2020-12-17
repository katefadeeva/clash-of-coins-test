import React, {Component} from 'react';
import TokenWidget from "../token-widget";
import { Capture, Money, Cup, Map} from "../../utils/utils";

import './what-gives.css';

export default class WhatGives extends Component {
  render() {
    return (
        <article className="bottom-section">
          <p className="bottom-section__title">Что дает токен?</p>
          <div className="bottom-section__tokens">
            <TokenWidget data={Capture}/>
            <TokenWidget data={Money}/>
            <TokenWidget data={Cup}/>
            <TokenWidget data={Map}/>
          </div>
        </article>
    )
  }
}