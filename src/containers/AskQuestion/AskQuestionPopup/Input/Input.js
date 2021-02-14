import React from 'react';
import classes from './Input.module.css';
import Aux from '../../../../hoc/Auxilary/Auxilary';



const Input =(props)=>{
    let inputElement=null;
    let selectSubject=[classes.selectDesign,classes.selectSubject];
    let   selectAnnonymity=[classes.selectDesign,classes.selectAnnonymity];


switch(props.elementType)
{
    case('input'):
    inputElement=<input onChange={props.clicked} className={classes.Input} {...props.elementConfig} value={props.value} />;
    break;
    case('textarea'):
    inputElement=<textarea onChange={props.clicked} className={classes.textArea} {...props.elementConfig} value={props.value} />;
    // inputElement=<CKEditor   editor={ClassicEditor} onChange={props.clicked}   className={classes.textArea}  {...props.elementConfig} value={props.value}/>
    break;
    case('select'):
    inputElement=<div className={props.selectType==='subject'?selectSubject.join(' '):selectAnnonymity.join(' ')} ><select onChange={props.clicked} defaultValue='no-value' className={classes.select} >
                <option value="no-value"  disabled placeholder="select" >{props.selectType}</option>
            {props.elementConfig.options.map((option)=>{
              return  <option key={option.value} value={option.value}>{option.displayValue}</option>
            })}
    </select></div>
    break;
    default:
        inputElement=<input onChange={props.clicked} {...props.elementConfig} value={props.value} />;
}
    return(
        <Aux>
        {props.elementType==="textarea"?
        <div className={classes.Input} >
            <label className={classes.Label}>{props.lable}</label>
            {inputElement}
            
        </div>:
           <div className={classes.Input}>
           <label className={classes.Label}>{props.lable}</label>
           {inputElement}
       </div>}
       </Aux>
    )
}

export default Input;