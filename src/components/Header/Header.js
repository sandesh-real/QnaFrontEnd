import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
// import HeaderBottom from './HeaderBottom/HeaderBottom'
import classes from './Header.module.css';
const Header =(props)=>{
  
    return(
        <div className={classes.Header}>
        {/* <div className={classes.burgerMenu}>
        <div className={classes.burgerMenuInternal}  onClick={props.show}>
                          <div className={classes.bar1}></div>
                          <div className={classes.bar2}></div>
                          <div className={classes.bar3}></div>
        </div>
                   
        
        </div> */}
        
            <HeaderTop inputRef={props.inputRef}  searchColl={props.searchColl} searchValue={props.searchValue} searchChangeHandler={props.searchChangeHandler} />
            {/* <HeaderBottom   randomReqNoti={props.randomReqNoti} friendReqNoti={props.friendReqNoti} LogoutHandler={props.LogoutHandler} isShow={props.isShow}/> */}
        </div>
    )
}
export default Header;