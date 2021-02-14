import * as actionTypes from '../actions/actionTypes';

const initialState={


}
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
    
        case(actionTypes.Reply_Added):
        return{
            ...state,
        }
        default:
            return state;
    }
}
export default reducer;