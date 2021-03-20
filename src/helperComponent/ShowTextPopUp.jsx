import React, { useState } from "react";
import classes from "./ShowTextPopUp.module.css";
import { NavLink } from "react-router-dom";

const ShowTextPopUp = ({
  text,
  icon,
  Home,
  navContainerListBtn,
  navContainerListNavBtn,
  link
}) => {
  const [isShown, setIsShown] = useState(false);
  const onMouseHover = (value) => {
    console.log(value);
    setTimeout(() => {
      setIsShown(value);
    }, 200);
  };
  return (
    <>
      <li
        className={navContainerListBtn}
        onMouseEnter={() => onMouseHover(true)}
        onMouseLeave={() => onMouseHover(false)}
        id={Home}
      >
        <NavLink to={link} exact className={navContainerListNavBtn}>
          <i className={icon}></i>
        </NavLink>
        {isShown ? <span className={classes.PoPUp}>{text}</span> : null}
      </li>
    </>
  );
};
export default ShowTextPopUp;
