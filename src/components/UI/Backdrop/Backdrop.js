import React from 'react';
import classes from './Backdrop.module.css';
const Backdrop=props=>{
    let backDropColor=[classes.Backdrop];
    if(props.type==='white')
    {
        backDropColor=[classes.Backdrop,classes.white];
    }
    if(props.type==='transparent')
    {
        backDropColor=[classes.Backdrop,classes.transparent];
    }
    return(
       props.show?<div className={backDropColor.join(' ')} onClick={props.clicked}></div>:null
    )
}
export default Backdrop;