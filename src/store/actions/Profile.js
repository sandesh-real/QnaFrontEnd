import * as actionTypes from './actionTypes';
import Axios from 'axios';
export const editUsernameSet=()=>{
    return{
        type:actionTypes.Edit_Username_Set
    }
}

export const editUsername=(token,username)=>{
    return dispatch=>{
        const data={
            username:username
        }
        Axios.post(`http://localhost:3000/user/update/${token}`,data)
        .then((res)=>{
            console.log(res.data.success);
            dispatch(editUsernameSet());
        })
    }
}
export const editPasswordSet=()=>{
    return{
        type:actionTypes.Edit_Password_Set
    }
}
export const editPassword=(token,prevPassword,newPassword)=>{
    return dispatch=>{
      const  data={
            oldpassword:prevPassword,
            newpassword:newPassword
        }
        Axios.post(`http://localhost:3000/user/update/password/${token}`,data)
        .then((res)=>{
            dispatch(editPasswordSet())
        })
    }
}
export const uploadProfilePic=(filedata,token)=>{
    console.log(filedata,token);
    return dispatch=>{

        Axios.post(`http://localhost:3000/user/profilepic/${token}`,filedata)
    }
}