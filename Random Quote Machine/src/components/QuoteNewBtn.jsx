import React, { Component } from 'react'

export default class QuoteNewBtn extends Component {
  render() {
    return (
      <button 
        id="new-quote" 
        className='btn mb-2 me-2' 
        onClick={this.props.generateNewQuote}
        style={{background:'#B355F2'}}
        >New Quote</button>
    )
  }
}
