import React, { useContext } from "react";
import { cartContext } from "./App";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let { cartstate, setcart } = useContext(cartContext);
  let total = 0;

  cartstate &&
    Object.values(cartstate).forEach((elem) => {
      total += elem.price * elem.quantity;
    });

  let minusHandler = (e, elem) => {
    console.log("MINUS CALLED", elem, e.target);
    if (elem.quantity == 1) {
      console.log("Quantity is", elem.quantity);
      e.target.disabled = true;
      setcart((prev) => {
        const { [elem.id]: _, ...rest } = prev;
        console.log(rest);
        return rest;
      });
    } else {
      setcart((prev) => {
        return {
          ...prev,
          [elem.id]: {
            ...prev[elem.id],
            quantity: prev[elem.id].quantity - 1,
          },
        };
      });
    }
  };

  let plusHandler = (e, elem) => {
    console.log(
      "PLUS CALLED",
      elem,
      e.target.parentElement.querySelector("button"),
    );
    e.target.parentElement.querySelector("button").disabled = false;
    setcart((prev) => {
      return {
        ...prev,
        [elem.id]: { ...prev[elem.id], quantity: prev[elem.id].quantity + 1 },
      };
    });
  };
  let navigate = useNavigate();
  let paymentproceedHandler = () => {
    navigate("/payment");
  };
  return (
    <>
      <div id="cartdiv">
        <h1>Cart</h1>
        <div id="carttablediv">
          {cartstate &&
            Object.values(cartstate).map((el) => {
              console.log(cartstate);
              if (el.quantity == 0) {
                buttondisabler(el);
              }
              return (
                <div key={el.id}>
                  <div>Name:{el.name}</div>
                  <div>Price:{el.price}</div>
                  <div>
                    <button
                      onClick={(e) => {
                        minusHandler(e, el);
                      }}
                    >
                      -
                    </button>
                    <span>{el.quantity}</span>
                    <button
                      id="plusbtn"
                      onClick={(e) => {
                        plusHandler(e, el);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <h3>Total:{total}</h3>

        <button
          id="paymentProceedBtn"
          onClick={() => {
            paymentproceedHandler();
          }}
        >
          Proceed To Payment
        </button>
      </div>
    </>
  );
};

export default Cart;
