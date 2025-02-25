import React from 'react';
import classes from './Input.module.css';
const Input =(props)=>{
    let inputElement=null;
    switch(props.elementType)
    {
        case('input'):
        inputElement=<input onChange={props.clicked} className={classes.InputText} {...props.elementConfig} value={props.value} />;
        break;
        default:
        inputElement=<input onChange={props.clicked} className={classes.InputText} {...props.elementConfig} value={props.value} />;

    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default Input;