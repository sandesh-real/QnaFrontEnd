import React,{useState,useEffect,useRef} from 'react';
import classes from './SearchInput.module.css';
import List from './List/List';
import * as actions from '../../../../../store/actions/index';
import {connect} from 'react-redux';
import Aux from '../../../../../hoc/Auxilary/Auxilary';

const SearchInput =(props)=>{
    const [searchValue,setSearchValue]=useState('');
    const [useEffectHandler,setUseEffectHandler]=useState(false);
    const [showList,setShowList]=useState(true)
  
    useEffect(()=>{
      
        if(useEffectHandler){
        
            props.onSearchSet(searchValue,props.token);
   
       setUseEffectHandler(false);
      
       
    }

    },[props,searchValue,useEffectHandler,setUseEffectHandler]);
    const searchChangeHandler=(event)=>{
       
        setSearchValue(event.target.value);
        setUseEffectHandler(true);
        setShowList(true);
       
    }
    const hideList=()=>{
        setShowList(false);
    }
    const showListHandler=()=>{
        setShowList(true);
    }
 
    return(
        <form className={classes.SearchInput} >
            <input ref={props.inneref} type="text" value={props.searchValue} onChange={searchChangeHandler}  className={classes.SearchInputType} placeholder="search"/>
            
   {showList?<Aux>{props.searchColl!==null?<Aux>{props.searchColl?<div className={classes.SearchCollection}>
                
                <ul className={classes.searchCollectionLists} onFocus={showListHandler}>
                {props.searchColl.map((searchData)=>{
                    return <List key={searchData.id}  hideList={hideList} id={searchData.id} title={searchData.title}/>
                })}
                </ul>
                <div className={classes.Backdrop} onClick={hideList}></div>
            </div>:null}</Aux>:null}</Aux>:null}  
        </form>
    )
}

const mapStateToProps=(state)=>{
    return{
        token:state.auth.token,
        searchColl:state.Question.searchColl

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
    
        onSearchSet:(data,token)=>dispatch(actions.searchColl(data,token))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchInput)