import React, {Component} from 'react';

import './token-widget.css';

export default class TokenWidget extends Component {
  state = {
    button: false,
    title: null,
    img: null
  }

  componentDidMount() {
    const { button, title, img } = this.props.data;
    this.setState(() => {return {button, title, img}});
  }

  styleH3 = {
    color: '#999999',
    marginTop: '20px'
  }

  render() {
    const { button, img, title} = this.state;
    return (
        <div className="token">
          <img src={img} alt={title}/>
          {button ? <h3 style={this.styleH3}>{title}</h3> : <h3>{title}</h3>}
          {button ? <button>Скоро</button> : null}
        </div>
    )
  }
}