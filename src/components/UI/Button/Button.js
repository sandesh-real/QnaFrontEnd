import React from 'react';
import classes from './Button.module.css';
import {NavLink} from 'react-router-dom';
const Button =(props)=>{
   
    return(
        <div className={classes.AnswerBtnContainer}>
        {props.to?<NavLink  to={{pathname:`${props.to}/${props.id}`}}  className={[classes.AnswerBtnContainerNav,classes[props.btnType]].join(' ')}>{props.children}</NavLink>
        :<button onClick={props.show} className={[classes.AnswerBtnContainerNav,classes[props.btnType]].join(' ')}>{props.children}</button>}
        </div>
        
    ) 
}
export default Button;