import * as actionTypes from './actionTypes';
import Axios from 'axios';
export const replyAdded=()=>{
    return{
        type:actionTypes.Reply_Added
    }
}
export const reply=(replyData,comment_id,token)=>{
    return dispatch=>{
        const data={
            title:replyData
        }
        Axios.post(`http://localhost:3000/reply/${token}&comment_id=${comment_id}`,data)
        .then((res)=>{
           dispatch(replyAdded())
        })
    }
}