import React, { Component } from 'react'

export default class QuoteAuthor extends Component {
  render() {
    return (
      <p id="author" 
        className='fs-5 text mt-4'
        style={{color:'#B355F2'}}
        >~ {this.props.author}</p>
    )
  }
}
