
import * as actionTypes from '../actions/actionTypes';
const initialState={
    viewAnswerData:null,
    q_id:null,
    canReloadAnswer:false
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case(actionTypes.VIEWANSWER_INITIAL_STATE):
        if(action.data[0].isEmpty)
        {
            return{
                ...state,
                viewAnswerData:action.data,
                q_id:action.q_id,
               
            }   
        }
        return{
            ...state,
            viewAnswerData:action.data,
            q_id:action.q_id
        }
        case(actionTypes.RESET_VIEWANSWER):
        {
            return{
                ...state,
            viewAnswerData:null,
            q_id:null
            }
        }
        case(actionTypes.VIEWANSWER_SUCCESS):
     
      
        return{
            ...state,
            canReloadAnswer:true
        }
        case(actionTypes.Can_Reload_Reset_Answer):
        {
            return{
                ...state,
                canReloadAnswer:false
            }
        }
        case(actionTypes.Like_Added):
        return{
            ...state
        }
        case(actionTypes.Dis_Like_Added):
        return{
            ...state
        }
        default:
            return state;
    }
   

}
export default reducer;