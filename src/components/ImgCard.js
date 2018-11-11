import React from "react";
const ImgCard = (props) => {
  const w18rem = {
    width: "18rem"
  }
  return (
    <div className="card" style={w18rem}>
      <img 
        className="card-img-top"
        src={props.imgSrc}
        alt="A cat." 
        onClick={props.handleClick}
        id={props.id}
      />
      
    </div>

  )
}
export default ImgCard;