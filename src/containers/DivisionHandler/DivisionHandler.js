import React,{useEffect} from 'react';
// import classes from './DivisionHandler.module.css';
import Division from '../../components/Division/Division';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
const DivisionHandler=(props)=>{
    useEffect(()=>{
        if(props.divisionSuccess)
        {
            props.history.push('/userprofile');
        }
    })
    return(
        <Division isSem={props.isSem} userId={props.userId} divisionSelect={props.divisionSelector}/>
    )
}
const mapStateToProps=(state)=>{
    return{
        isSem:state.auth.isSem,
        userId:state.auth.userId,
        divisionSuccess:state.auth.divisionSuccess
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        divisionSelector:(sem,userId,value)=>dispatch(actions.divisionSelector(sem,userId,value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DivisionHandler);