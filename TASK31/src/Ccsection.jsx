import React from "react";

const Ccsection = () => {
  return (
    <>
      <div id="ccinput">
        <label htmlFor="cnumber">Enter Your Card Number</label>
        <input type="number" id="cnumber" />
        <label htmlFor="date">Enter Expiry Date</label>
        <input type="number" id="date" />
        <label htmlFor="cvvnum">Enter CVV Number</label>
        <input type="text" id="cvvnum" />
        <button>Confirm Button</button>
      </div>
    </>
  );
};

export default Ccsection;
