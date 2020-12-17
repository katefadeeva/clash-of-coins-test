import React, {Component} from 'react';

import './options-widget.css';

export default class OptionsWidget extends Component {
  state = {
    title: null,
    img: null,
    buttonTitle: null,
    buttonClick: null
  }

  componentDidMount() {
    const { title, img, buttonTitle, buttonClick } = this.props.data;
    this.setState(() => {
      return {title, img, buttonTitle, buttonClick}
    })
  }

  render() {
    const { title, img, buttonTitle, buttonClick } = this.state;
    return (
        <div className="option">
          <img src={img} alt={buttonTitle}/>
          <div>
            <h2>{title}</h2>
            <button onClick={() => {buttonClick(buttonTitle)}}>{buttonTitle}</button>
          </div>
        </div>
    )
  }
}