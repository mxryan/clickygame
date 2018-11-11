import React, { Component } from 'react';
import Header from "./components/Header"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentScore: 0,
      bestScore: 0,
      imgOrder: [{
        imgSrc: "https://i.imgur.com/UMJzRnFb.jpg",
        clicked: false
      },{
        imgSrc: "https://i.imgur.com/UMJzRnFb.jpg",
        clicked: false
      },{
        imgSrc: "https://i.imgur.com/UMJzRnFb.jpg",
        clicked: false
      },{
        imgSrc: "https://i.imgur.com/UMJzRnFb.jpg",
        clicked: false
      },{
        imgSrc: "https://i.imgur.com/UMJzRnFb.jpg",
        clicked: false
      },{
        imgSrc: "https://i.imgur.com/UMJzRnFb.jpg",
        clicked: false
      },{
        imgSrc: "https://i.imgur.com/UMJzRnFb.jpg",
        clicked: false
      },{
        imgSrc: "https://i.imgur.com/UMJzRnFb.jpg",
        clicked: false
      },{
        imgSrc: "https://i.imgur.com/UMJzRnFb.jpg",
        clicked: false
      }]
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header 
          currentScore={this.state.currentScore}
          bestScore={this.state.bestScore}
        />
        <main className="container"><p>Hey</p></main>
      </div>
    );
  }
}

export default App;
