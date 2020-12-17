import React, {Component} from 'react';
import { Finance, Community } from "../../utils/utils";
import OptionsWidget from "../options-widget";

import './how-to-get.css'

export default class HowToGet extends Component {
  render() {
    return (
        <article className="top-section">
          <p className="top-section__title">Как получить?</p>
          <div className="top-section__options">
            <OptionsWidget data={Finance} />
            <OptionsWidget data={Community} />
          </div>
        </article>
    )
  }
}