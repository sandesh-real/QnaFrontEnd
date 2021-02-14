import * as actionTypes from '../actions/actionTypes';

const initialState={
commentColl:null,
isBtnClick:false
}
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case(actionTypes.Comment_Initial_State):
        return{
            ...state,
            commentColl:action.commentColl,
            
        }
        case(actionTypes.Comment_Added):
        return{
            ...state,
          
        }
        case(actionTypes.Rest_Comment_Collection):
        return{
            ...state,
            commentColl:null,
            isBtnClick:false
            
        }
        default:
            return state;
    }
}
export default reducer;