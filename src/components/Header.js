import React from "react";
const Header = (props) => {
  return (
    <div className="jumbotron">
      <div className="container">
      <h1>This is clicky game</h1>
      <p>Click on a different card each round to win a point. The cards will shuffle each round so be careful!</p>
      <p>How many can you get in a row?</p>
      <p>Current: {props.currentScore}</p>
      <p>Best: {props.bestScore}</p>
      </div>
    </div>
  )
}

export default Header;