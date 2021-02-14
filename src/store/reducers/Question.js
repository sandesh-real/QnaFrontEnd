import * as actionTypes from '../actions/actionTypes';
const initialState={
    openOption:false,
    canReload:false,
    searchColl:null,
    moreRelatedQuestion:null
}
const reducer=(state=initialState,action)=>{
   
    switch(action.type)
    {
        case(actionTypes.ADD_QUESTION_SUCCESS):
        return{
            ...state,
            canReload:true
        }
        case(actionTypes.Can_Reload_Reset):
        return{
            ...state,
            canReload:false
        }
        case(actionTypes.Set_SEARCH_Collection):
        return{
            ...state,
            searchColl:action.searchColl
        }
        case(actionTypes.Set_Question_For_More_Question):
        return{
            ...state,
            moreRelatedQuestion:action.moreRelatedQuestion
        }
            default:
                return state;
    }
}
export default reducer;