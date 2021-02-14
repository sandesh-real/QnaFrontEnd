import Axios from 'axios';

import * as actionTypes from './actionTypes';

export const getFriendNotiCollection=(friendNotiColl)=>{
   
    return{
        type:actionTypes.Get_Friend_Noti_Collection,
        friendNotiColl:friendNotiColl
    }
}
export const friendNotiCollection=(token)=>{
    return dispatch=>{
        Axios.post(`http://localhost:3000/createFriendNotification/${token}`)
        .then((res)=>{
            
            dispatch(getFriendNotiCollection(res.data.friedNotificationColl));
        })
    }
}



export const getRandomNotiCollection=(randomNotiColl)=>{

    return{
        type:actionTypes.Get_Random_Noti_Collection,
        randomNotiColl:randomNotiColl
    }
}
export const randomNotiCollection=(token)=>{
    return dispatch=>{
        Axios.post(`http://localhost:3000/getRandomNotiColl/${token}`)
        .then((res)=>{
            dispatch(getRandomNotiCollection(res.data.randomNotiColl))
        })
    }
}






/**************************friend check status */
export const checkFriendNotiStatus=(friendNotiCheck)=>{
    return{
        type:actionTypes.Check_Friend_Noti_Status,
        friendNotiCheck:friendNotiCheck
    }
}

export const friendNotiCheck=(token)=>{
    return dispatch=>{
        Axios.post(`http://localhost:3000/friendrequstNotiCheckStatus/${token}`)
        .then((res)=>{
           
            dispatch(checkFriendNotiStatus(res.data.friendNotiCheck))
        })
    }
}
export const makeFriendNotiFalse=()=>{
    return{
        type:actionTypes.Make_Friend_Noti_False
    }
}
export const friendNotiMakeFalse=(token)=>{
    return dispatch=>{
        Axios.post(`http://localhost:3000/makeFriedNotiCheckStatusFalse/${token}`)
        .then((res)=>{
            console.log("random noti false");
            dispatch(makeFriendNotiFalse());
        })
    }
}


/********************rando notification******************/

export const checkRandomNotiStatus=(randomNotiCheck)=>{
    return{
        type:actionTypes.Check_Random_Noti_Status,
        randomNotiCheck:randomNotiCheck
    }
}

export const randomNotiCheck=(token)=>{
    return dispatch=>{
        Axios.post(`http://localhost:3000/notification/statuscheck/${token}`)
        .then((res)=>{
           
            dispatch(checkRandomNotiStatus(res.data.status));
        })
    }
}
export const makeRandomNotiFalse=()=>{
    return{
        type:actionTypes.Make_Random_Noti_False
    }
}
export const randomNotiMakeFalse=(token)=>{
    return dispatch=>{
        Axios.post(`http://localhost:3000/notification/statustrue/${token}`)
        .then((res)=>{
       
            dispatch(makeRandomNotiFalse());
        })
    }
}
