import React from "react";
import classes from './Card.module.css';

const Card = (props) => {
    //acepto las clases de Card.module.css
    //y las que manda AddUser.js
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;