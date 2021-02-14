import * as actionType from '../actions/actionTypes';

const initialState={

}
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case(actionType.Edit_Username_Set):
        return{
            ...state
        }
        case(actionType.Edit_Password_Set):
        return{
            ...state
        }
        default:
            return state
    }
}
export default reducer;