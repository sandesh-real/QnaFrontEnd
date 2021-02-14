
import * as actionTypes from './actionTypes';
import Axios from 'axios';
export const addFriendRequest=(message)=>{
    return{
        type:actionTypes.Add_Friend_Request,
        message:message
    }
} 

export const addFriend=(token,id)=>{
    
    return dispatch=>{
        Axios.post(`http://localhost:3000/friendRequest/${token}&f_id=${id}`)
        .then((res)=>{
            console.log(res.data.message);
            dispatch(addFriendRequest(res.data.message));
        })
    }
}
