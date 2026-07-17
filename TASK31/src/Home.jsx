import React from "react";
import Card from "./Card";
import Cart from "./Cart";

const Home = () => {
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
  return (
    <>
      <div id="main">
        <div id="cardSection">
          {shoes.map((element) => {
            return <Card element={element}/>;
          })}
        </div>
        <div id="cartdiv">
            <Cart/>
        </div>
      </div>
    </>
  );
};

export default Home;
