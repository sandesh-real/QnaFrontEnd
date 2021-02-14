import React from 'react';
import Navigation from '../../UI/Navigation/NavigationItems';
import classes from './HeaderBottom.module.css';
const HeaderBottom =(props)=>{

    let attachedClasses=[classes.HeaderBottom,classes.navDisplayNone];
   
    return(
        <div className={attachedClasses.join(' ')}>
            <Navigation  randomReqNoti={props.randomReqNoti} friendReqNoti={props.friendReqNoti} LogoutHandler={props.LogoutHandler}/>
        </div>  
       
    )

}
export default HeaderBottom;