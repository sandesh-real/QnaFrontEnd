// import Axios from 'axios';
import React,{useEffect} from 'react';
import Moresearch from '../Moresearch/Moresearch';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
const MoresearchHandler=(props)=>{
   
    useEffect(()=>{
  
        // const data={
        //     searchColl:props.searchColl
        // }
        // Axios.post(`http://localhost:3000/moresearchQuestion/${props.token}&id=${props.match.params.id}`,data)
        // .then((res)=>{
        //     setMoreRelatedQuestion(res.data.moreQuestionCollection);
        // })
           // const data={
        //     searchColl:
        // }
      
        props.onMoreQuestion(props.token,props.match.params.id,props.searchColl)

    },[props])

    return(
        <Moresearch {...props} id={props.match.params.id}/>
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
        onMoreQuestion:(token,id,data)=>dispatch(actions.setMoreQuestion(token,id,data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MoresearchHandler);