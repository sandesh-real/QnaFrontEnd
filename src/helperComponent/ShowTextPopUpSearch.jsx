import React, { useState } from "react";
import classes from "./ShowTextPopUp.module.css";


const ShowTextPopUp = ({
  text,
  icon,
  Home,
  searchScreenHandler,
  classLogout,
  navContainerListNavBtn,
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
      
        onMouseEnter={() => onMouseHover(true)}
        onMouseLeave={() => onMouseHover(false)}
        className={classLogout}
        id={Home}
      >
         <button
                onClick={searchScreenHandler}
                className={navContainerListNavBtn}
              >
                <i className={icon}></i>
               
              </button>
        {isShown ? <span className={classes.PoPUp}>{text}</span> : null}
      </li>
    </>
  );
};
export default ShowTextPopUp;
