import React from "react";

const Card = (props) => {
  let displayName = props.name;
  let displayMail = props.mail;
  let displayId = props.id;

  return (
    <>
      <div className="card">
        <h1>Card {displayId}</h1>
        <h2>{displayName}</h2>
        <h3>{displayMail}</h3>
      </div>
    </>
  );
};

export default Card;
