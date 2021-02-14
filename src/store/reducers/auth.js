import * as actionTypes from '../actions/actionTypes';

const initialState={
    questionArr:null,
    subjects:null,
    divisionsem:null,
    divisionyear:null,
    isSem:null,
    username:null, 
    token:null,
    faculty:null,
    isAnswer:null,
    isSuccess:null,
    userId:null,
    imageBuffer:null,
    allDone:false,
    redirect:null,
    isImageChanged:false

}

const reducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case(actionTypes.Auth_Page_start):
        return{
            ...state,
            faculty:action.faculty,
            isSem:null,
            isSuccess:null,
            userId:null,
            imageBuffer:null,
            redirect:null
        
        }
        case(actionTypes.Auth_Signup):
    
        return{
            ...state,
            isSem:action.isSem,
            isSuccess:action.isSuccess,
            userId:action.userId,
          
         
        }
        case(actionTypes.Auth_login):
 
        return{
            ...state,
            questionArr:action.question.questions,
            subjects:action.question.subjects,
            token:action.question.token,
            divisionsem:action.question.divisionsem,
            divisionyear:action.question.divisionyear,
            isSem:action.question.isSem,
            username:action.question.username,
            allDone:action.question.allDone,
            userId:action.question.user_id,
           

        }
 
        case(actionTypes.Division_SELECTOR_Controler):
        return{
            ...state,
            divisionSuccess:action.divisionSuccess
        }
        case(actionTypes.Profile_Pic_Handler):
        return{
            ...state,
        
            imageBuffer:action.imgBuffer,
            questionArr:action.homeData.questions,
            subjects:action.homeData.subjects,
            divisionsem:action.homeData.divisionsem,
            divisionyear:action.homeData.divisionyear,
            isSem:action.homeData.isSem,
            username:action.homeData.username,
            isImageChanged:true,
            token:action.homeData.token,
            
         
        }
        case(actionTypes.All_set):
        return{
            ...state,
            allDone:true
        }
        case(actionTypes.Log_out_set):
   
        return{
            ...state,
            questionArr:null,
            subjects:null,
            divisionsem:null,
            divisionyear:null,
          
            username:null, 
            token:null,
            faculty:null,
            allDone:false,
            redirect:action.redirect
        }
        default:
            return state

    }
}

export default reducer;