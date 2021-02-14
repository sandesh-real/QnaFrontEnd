import * as actionTypes from '../actions/actionTypes';

const initialState={
    friendReqNoti:false,
    randomReqNoti:true,
    friendNotiColl:null,
    randomNotiColl:null
}

const reducer =(state=initialState,actions)=>{
    switch(actions.type)
    {
        case(actionTypes.Get_Friend_Noti_Collection):
        return{
            ...state,
            friendNotiColl:actions.friendNotiColl
        }
        case(actionTypes.Get_Random_Noti_Collection):
        return{
            ...state,
            randomNotiColl:actions.randomNotiColl
        }


        case(actionTypes.Check_Friend_Noti_Status):
        return{
            ...state,
            friendReqNoti:actions.friendNotiCheck
        }
        case(actionTypes.Make_Friend_Noti_False):
        return{
            ...state,
            friendReqNoti:false
        }
        case(actionTypes.Check_Random_Noti_Status):
        return{
            ...state,
            randomReqNoti:actions.randomNotiCheck
        }
        case(actionTypes.Make_Random_Noti_False):
        return{
            ...state,
            randomReqNoti:true
        }
        default:
            return state
    }
}
export default reducer;