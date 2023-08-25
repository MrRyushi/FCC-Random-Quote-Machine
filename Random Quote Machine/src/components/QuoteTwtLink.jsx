import React, { Component } from 'react'

export default class QuoteTwtLink extends Component {
  render() {
    return (
      <a id="tweet-quote" href='twitter.com/intent.tweet' className='btn btn-info mb-2 ms-2'>Tweet</a>
    )
  }
}
