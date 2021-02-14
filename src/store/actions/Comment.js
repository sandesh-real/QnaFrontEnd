import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const commentAdded=()=>{
    return{
        type:actionTypes.Comment_Added
    }
}
export const comment=(commentData,answer_id,token)=>{
    return dispatch=>{
        const data={
            title:commentData
        }
        Axios.post(`http://localhost:3000/comment/${token}&answer_id=${answer_id}`,data)
        .then((res)=>{
           dispatch(commentAdded())
        })
    }
}


export const resetCommentCollection=()=>{
    return{
        type:actionTypes.Rest_Comment_Collection
    }
}