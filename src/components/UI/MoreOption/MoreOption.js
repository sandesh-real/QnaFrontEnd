import React from 'react';
import classes from './MoreOption.module.css';
import Aux from '../../../hoc/Auxilary/Auxilary'
const MoreOption =(props)=>{
    return(
        <Aux>
     <div className={classes.moreOptionItem}>
        
         <ul className={classes.moreOptionLists}>
         {props.isThisMyColl?
         <Aux>
  
             <li className={classes.moreOptionList}><button onClick={props.DeleteHandler}>Delete</button></li>
             <li className={classes.moreOptionList}><button onClick={props.ReportHandler}>Report</button></li></Aux>:
             <li className={classes.moreOptionList}><button onClick={props.ReportHandler}>Report</button></li>
             }

         </ul>
    </div>
    </Aux>
    )
}
export default MoreOption;