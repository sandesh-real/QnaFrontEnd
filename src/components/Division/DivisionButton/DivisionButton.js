import React from 'react';
import classes from './DivisionButton.module.css';

 const DivisionButton =(props)=>{
   let  isSem=props.isSem;
     let userId=props.userId
    return(
       
        <button  onClick={()=>props.divisionSelect(isSem,userId,props.value)} className={classes.box}>{props.children}</button>
   
            
    )
}
export default DivisionButton;