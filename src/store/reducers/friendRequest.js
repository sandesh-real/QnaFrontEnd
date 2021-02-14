import * as actionType from '../actions/actionTypes';

const initialState={
    friendRequestMessage:null
}
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case(actionType.Add_Friend_Request):
        return{
            ...state,
            friendRequestMessage:action.message
        }
      
        default:
            return state
    }
}
export default reducer;