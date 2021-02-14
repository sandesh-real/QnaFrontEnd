import React from 'react';
import classes from './Sidebar.module.css';
import Navigation from '../../UI/Navigation/NavigationItems';
import Logo from '../../UI/Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';

import Aux from '../../../hoc/Auxilary/Auxilary';
const Sidebar =(props)=>{
    
    let attachedClasses=[classes.Sidebar,classes.Close,classes.navDisplayNone];
    if(props.isShow)
    {
        attachedClasses=[classes.Sidebar,classes.Open];
    }
    return(
        <Aux>
        <Backdrop show={props.isShow} clicked={props.closed}/>
    
        <div className={attachedClasses.join(' ')}>
            <Logo/>
            <Navigation  randomReqNoti={props.randomReqNoti} friendReqNoti={props.friendReqNoti} LogoutHandler={props.LogoutHandler}/>
           
        </div>
        </Aux>
    )
}
export default Sidebar;