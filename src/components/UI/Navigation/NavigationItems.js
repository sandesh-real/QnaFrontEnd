import React from 'react';
// import Aux from '../../../hoc/Auxilary/Auxilary'
import classes from './NavigationItmes.module.css';
import {NavLink} from 'react-router-dom';
const Nav=(props)=>{
  let classesLogOut=[classes.navContainerList,classes.navContainerListBtn];
  let classNotification=[classes.navContainerListNav];

  if(props.friendReqNoti || !props.randomReqNoti)
  {
    classNotification=[classes.navContainerListNav,classes.notiActive]
  }
  // friendReqNoti
    return(
      <div className={classes.navContainer}>
          <ul className={classes.navContainerLists}>
          <li className={classes.navContainerList}><NavLink to='/' exact className={classes.navContainerListNav}><i className="fas fa-home"></i> Home</NavLink></li>

            <li className={classes.navContainerList}><NavLink to="/notifications"  className={classNotification.join(' ')} ><i className="fas fa-bell"></i> Notification</NavLink></li>
            <li className={classes.navContainerList}><NavLink to="/profile" className={classes.navContainerListNav}><i className="fas fa-user"></i> Profile </NavLink></li>
        
            <li className={classesLogOut.join(' ')}><button onClick={props.LogoutHandler} className={classes.navContainerListNavBtn} ><i className="fas fa-power-off"></i></button></li>
         
          </ul>
      </div>
    )
}
export default Nav;