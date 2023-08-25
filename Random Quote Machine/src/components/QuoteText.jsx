import React, { Component } from 'react'

export default class QuoteText extends Component {
  render() {
    return (
      <p id='text' className="fs-3 text mt-3" style={{color: `#B355F2`}}>{this.props.quote}</p>
    )
  }
}
