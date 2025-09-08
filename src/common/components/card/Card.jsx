import React, { Component } from "react";
import './Cards.scss';
const Card = props => {
  return (
    <div className="Card__container">
      <div className="Card__title-sec">
        <p>{props.cardTitle}</p>
      </div>
      <div className="Card__image-sec">
        <span><img src={props.cardImage} alt=""/></span>
      </div>
      <div className="Card__desc-sec">
        <p>{props.cardDescription}</p>
      </div>
    </div>
  );
};

export default Card;
