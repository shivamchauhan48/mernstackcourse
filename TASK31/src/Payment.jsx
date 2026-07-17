import React, { useContext } from "react";
import { cartContext } from "./App";
import Ccsection from "./Ccsection";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  let { cartstate, setcart } = useContext(cartContext);
  console.log(cartstate);
  let total = 0;
  cartstate &&
    Object.values(cartstate).forEach((elem) => {
      total += elem.price * elem.quantity;
    });
  let navigate = useNavigate();
  const proceedHandler = () => {
    navigate("/");
  };
  return (
    <>
      <div id="navbar">
        <div id="logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/034/637/950/non_2x/deer-head-logo-free-png.png"
            alt=""
          />
        </div>
      </div>
      <div id="paymentSect">
        <div id="ccdiv">
          <Ccsection />
        </div>

        <div id="paymentcartdiv">
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
                    <div>
                      <img src={el.image} alt="" />
                    </div>
                    <div>{el.name}</div>
                    <div>
                      <strong> {el.price} </strong>{" "}
                    </div>
                    {/* <div>
                      <span>{el.quantity}</span>
                    </div> */}
                  </div>
                );
              })}
          </div>
          <h3>Total:{total}</h3>
          <button
            id="gobackBtn"
            onClick={() => {
              proceedHandler();
            }}
          >
            Go Back To Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
