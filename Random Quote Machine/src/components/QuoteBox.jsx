import React, { Component } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import QuoteNewBtn from './QuoteNewBtn';
import QuoteTwtLink from './QuoteTwtLink';

export default class QuoteBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNum: -1,
      items: [],
      DataisLoaded: false,
      color: {},
      ColorisLoaded: false
    };

    this.generateNewQuote = this.generateNewQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
    this.fetchColor();
  }

  fetchQuote() {
    fetch('https://type.fit/api/quotes')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          items: data,
          DataisLoaded: true,
        });
      });
  }

  fetchColor() {
    fetch('https://www.colr.org/json/color/random')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          color: data,
          ColorisLoaded: true
        });
      });
  }

  generateNewQuote(){
    if(this.state.DataisLoaded){
        this.setState({
            randomNum: Math.floor(Math.random() * this.state.items.length)
        })
        console.log(this.state.randomNum)
    }
  }

  render() {
    const { items, DataisLoaded } = this.state;
    let quote = '';
    let author = '';
    let colorScheme = "";

    if (DataisLoaded) {
        let randomNum;
        if(this.state.randomNum == -1){
            randomNum = Math.floor(Math.random() * items.length);
        } else {
            randomNum = this.state.randomNum;
        }
      quote = items[randomNum].text;
      author = items[randomNum].author;
    }

    if(this.state.ColorisLoaded){
        console.log(this.state.color.colors[0].hex)
        colorScheme = this.state.color.colors[0].hex;
    }

    return (
      <div id="quote-box" className="container border border-round border-black rounded" style={{ width: '40vw', color: "#rgb(181, 97, 255)" }}>
        <QuoteText quote={quote} color={colorScheme}/>
        <QuoteAuthor author={author} color={colorScheme}/>
        <div className='mt-5 mb-2 d-flex justify-content-between'>
          <QuoteTwtLink />
          <QuoteNewBtn generateNewQuote={this.generateNewQuote} color={colorScheme}/>
        </div>
      </div>
    );
  }
}
