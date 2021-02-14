import React,{useState,useEffect} from 'react';
// import classes from './SubjectQuestion.module.css';
import {connect} from 'react-redux';
// import * as actions from '../../store/actions/index';
import SubjectQuestion from '../../components/SubjectQuestion/SubjectQuestion';
import Aux from '../../hoc/Auxilary/Auxilary';
import Subject from '../.../../../components/main/Subject/Subject';
import Axios from 'axios';
const SubjectQuestionHandler =(props)=>{
    const [subjectQuestionColl,setSubjectQuestionColl]=useState([]);
    useEffect(()=>{
        Axios.post(`http://localhost:3000/subjectQuestion/${props.token}&id=${props.match.params.id}`)
        .then((res)=>{
            setSubjectQuestionColl(res.data.questionColl);
        })
    
    })
    return(
        <Aux>
        <Subject  subjects={props.subjects}/>
        <SubjectQuestion subjectQuestionColl={subjectQuestionColl}/>
        </Aux>
    )
}
const mapStateToProps=(state)=>{
    return{
        token:state.auth.token,
        subjects:state.auth.subjects

    }
}
export default connect(mapStateToProps)(SubjectQuestionHandler);