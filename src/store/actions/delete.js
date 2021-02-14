
// import * as actionTypes from './actionTypes';
import Axios from 'axios';
/*******************************for question*********************** */
export const setDeleteQuestionHandler=(token,id)=>{
    return dispatch=>{
        Axios.post(`http://localhost:3000/deleteQuestion/${token}&id=${id}`)
    }
}
export const setDeleteAnswerHandler=(token,id)=>{
    return dispatch=>{
        Axios.post(`http://localhost:3000/deleteAnswer/${token}&id=${id}`)
    }
}

