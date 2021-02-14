import React from 'react';
import classes from './Input.module.css';
const Input =(props)=>{
    let inputElement=null;
    // const inputClasses =[classes.InputElement];
    switch(props.elementType)
    {
        case('input'):
        inputElement=<input onChange={props.clicked} className={classes.InputText} {...props.elementConfig} value={props.value} />;
        break;
        case ('select'):
            inputElement=<div className={classes.selectDesign} ><select onChange={props.clicked} defaultValue='no-value'  >
             <option value="no-value"  disabled placeholder="select" >{props.selectType}</option>
                {props.elementConfig.options.map((option)=>(
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))}
            </select></div>;
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