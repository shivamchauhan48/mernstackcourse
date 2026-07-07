import React from "react";

const Card = (props) => {
  console.log(props);
  let { imglink, name, description } = props;
  console.log(imglink, name, description);
  return (
    <div className="card">
      <img src={imglink} alt="" />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
