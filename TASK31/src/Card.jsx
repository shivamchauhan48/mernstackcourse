import React, { useContext } from "react";
import { cartContext } from "./App";

const Card = (props) => {
  let { cartstate, setcart } = useContext(cartContext);

  let elem = props.element;
  const addtocarthandler = (element) => {
    console.log(element, "clicked");
    setcart((prev) => {
      // console.log(prev, "Updator");
      if (prev[element.id]) {
        return {
          ...prev,
          [element.id]: {
            ...prev[element.id],
            quantity: prev[element.id].quantity + 1,
          },
        };
      } else {
        return {
          ...prev,
          [element.id]: { ...element, quantity: 1 },
        };
      }
    });
  };
  return (
    <>
      <div className="card" key={elem.id}>
        <img src={elem.image} alt="" />
        <h3>Name:{elem.name}</h3>
        <h3>Price:{elem.price}</h3>
        <button
          onClick={() => {
            addtocarthandler(elem);
          }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default Card;
