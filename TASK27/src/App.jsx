import React, { useState } from "react";
import Navbar from "./Components/Navbar";
const App = () => {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 12000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxF6EC2EgxYPYDmHbkYCVNKyj4IDrvKwrWmtRjzj-TlVqMwcutw3GUd0o&s=10",
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      price: 14000,
      image:
        "https://thedropdate.com/_next/image?url=https%3A%2F%2Fstatic.sneakerjagers.com%2Fp%2Fa937VMrZGUhPtXoIAsvRMnGPhq3iRy0z1EK3sl7Y.png&w=3840&q=100",
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: 8000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDWSnho6WPf1jbZsp4J1867w2qwNfKoS-xttNrthkQiT8Mngjv4XHlbF5&s=10",
    },
    {
      id: 4,
      name: "New Balance 574",
      price: 9000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqk3ALKJlsKTboshxtijU0fTX4NM3p519uc_Q3JqEqvAAVaXVqTD5APXgC&s=10",
    },
    {
      id: 5,
      name: "Converse Chuck Taylor",
      price: 5000,
      image:
        "https://e7.pngegg.com/pngimages/372/993/png-clipart-chuck-taylor-all-stars-high-top-converse-sneakers-shoe-tow-mater-white-converse-thumbnail.png",
    },
    {
      id: 6,
      name: "Reebok Classic Leather",
      price: 7499,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6sgdlQ64FVZuOGFyPmnU6VFgQpS8OUxhGWe-Z72O5lCgwvGpOddHJztw&s=10",
    },
    {
      id: 7,
      name: "ASICS Gel-Kayano",
      price: 13000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuApPlyUSOXbZpgePKPPRWc4g-Fvqs-ZmYogTPxWwhVuCenSJZUzgko7sH&s=10",
    },
    {
      id: 8,
      name: "Vans Old Skool",
      price: 6499,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXLJ97cR2_UbwWNkzsRXidXoATu1OjurBoA6iorDSICLkI-oUgPWrk4LD&s=10",
    },
    {
      id: 9,
      name: "Skechers Go Walk",
      price: 5499,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2a3tHmpm10jt7q4yvV_NHW10U4r-4Mhl7OtIoZ_rdax2TwGhdNg191s&s=10",
    },
    {
      id: 10,
      name: "Under Armour HOVR",
      price: 11000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZRWwrIZQYJMqIILQRPJFtTjPWrNE175_OTPL2ks-Uw&s",
    },
  ];

  let [cartstate, setcart] = useState({});

  const addtocarthandler = (element) => {
    // console.log(element, "clicked");
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

  let total = 0;
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

  return (
    <>
      <Navbar />

      <div id="main">
        <div id="cardSection">
          {shoes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt="" />
                <h3>Name:{element.name}</h3>
                <h3>Price:{element.price}</h3>
                <button
                  onClick={() => {
                    addtocarthandler(element);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
        <div id="cartdiv">
          <h1>Cart</h1>
          <div id="carttablediv">
            {cartstate &&
              Object.values(cartstate).map((el) => {
                //  console.log(cartstate);
                // if (el.quantity == 0) {
                //   buttondisabler(el);
                // }
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
        </div>
      </div>
    </>
  );
};

export default App;
