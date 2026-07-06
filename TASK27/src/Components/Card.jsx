import React from "react";

const Card = (props) => {
  // console.log(props.data);
  const addtocarthandler = (e) => {
    console.log("Clicked",props.data);
  };
  return (
    <>
      <div className="card">
        <img src={props.data.image} alt="" />
        <h3>Name:{props.data.name}</h3>
        <h3>Price:{props.data.price}</h3>
        <button onClick={addtocarthandler}>Add To Cart</button>
      </div>
    </>
  );
};

export default Card;
