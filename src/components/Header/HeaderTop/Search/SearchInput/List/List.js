import React from 'react';
import classes from './List.module.css';
import {NavLink} from 'react-router-dom';
import Aux from '../../../../../../hoc/Auxilary/Auxilary';
const List =(props)=>{
    return(
        <Aux>
        {props.id===123098?<li className={classes.searchCollectionList}>{props.title}</li>:
            <li className={classes.searchCollectionList}><NavLink to={{pathname:`/moresearch/${props.id}`}} onClick={props.hideList} className={classes.searchCollectionListNav}>{props.title}</NavLink></li>}
    
        </Aux>
    )
}
export default List;