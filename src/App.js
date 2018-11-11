import React, { Component } from 'react';
import Header from "./components/Header"
import ImgCard from "./components/ImgCard"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentScore: 0,
      bestScore: 0,
      imgOrder: [{
        imgSrc: "https://i.imgur.com/UMJzRnFb.jpg",
        clicked: false,
        id: 0
      },{
        imgSrc: "https://i.imgur.com/L6qa9Dvb.jpg",
        clicked: false,
        id: 1
      },{
        imgSrc: "https://i.imgur.com/88KWnklb.jpg",
        clicked: false,
        id: 2
      },{
        imgSrc: "https://i.imgur.com/U3bsdylb.jpg",
        clicked: false,
        id: 3
      },{
        imgSrc: "https://i.imgur.com/5MFYgZGb.jpg",
        clicked: false,
        id: 4
      },{
        imgSrc: "https://i.imgur.com/pzA0ljSb.jpg",
        clicked: false,
        id: 5
      },{
        imgSrc: "https://i.imgur.com/G2MKwcGb.jpg",
        clicked: false,
        id: 6
      },{
        imgSrc: "https://i.imgur.com/eagurXGb.jpg",
        clicked: false,
        id: 7
      },{
        imgSrc: "https://i.imgur.com/bgifTQlb.jpg",
        clicked: false,
        id: 8
      }]
    }
  }
  
  randomize = () => {
    const newArrState = [...this.state.imgOrder].sort(function() {
      return .5 - Math.random();
    });
    this.setState({imgOrder: newArrState})
  }

  handleClick = (e) => {
    console.log(e.target.id);
    let picID = e.target.id;
    const imgOrderCopy = [...this.state.imgOrder]
    for (let i = 0; i < imgOrderCopy.length; i++) {
      console.log(imgOrderCopy[i]);
      if (picID == imgOrderCopy[i].id) {
        if (imgOrderCopy[i].clicked) {
          this.gameOver();
        } else {
          imgOrderCopy[i].clicked = true;
          this.setState({
            imgOrder: imgOrderCopy, 
            currentScore: this.state.currentScore + 1
          })
        }
      }
    }
    console.log(this.state)
    this.randomize();
  }

  gameOver = () => {
    console.log("game over");
  }

  render() {
    const ImgCards = this.state.imgOrder.map((obj,i) => {
      return (
        <ImgCard
          imgSrc={obj.imgSrc}
          handleClick={this.handleClick}
          key={i}
          id={obj.id}
        />
      )
    })
    const mainStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridRowGap: "10px"
    }
    return (
      <div className="App">
        <Header 
          currentScore={this.state.currentScore}
          bestScore={this.state.bestScore}
        />
        <main className="container" style={mainStyle}>
        {ImgCards}</main>
      </div>
    );
  }
}

export default App;
