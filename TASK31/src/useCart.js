import { useState } from "react";

export const useCart = () => {
  let [cartstate, setcart] = useState({});
  return { cartstate, setcart };
};
