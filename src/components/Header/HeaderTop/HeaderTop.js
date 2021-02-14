import React from 'react';
import Logo from '../../UI/Logo/Logo';
import classes from './HeaderTop.module.css';
import Search from './Search/Search';
const HeaderTop=(props)=>{
    return(
        <div className={classes.HeaderTop}>
            <Logo/>
            <Search  inputRef={props.inputRef}  searchColl={props.searchColl} searchValue={props.searchValue} searchChangeHandler={props.searchChangeHandler}/>
        </div>
    )
}
export default HeaderTop;