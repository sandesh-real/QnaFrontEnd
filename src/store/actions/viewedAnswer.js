import Axios from 'axios';

import * as actionTypes from './actionTypes';

export const viewanswerInitialState=(data,id)=>{
   
        return{
            type:actionTypes.VIEWANSWER_INITIAL_STATE,
            data:data,
            q_id:id
        
    }
   
}

export const viewanswerInitialStateSetUP=(id,token)=>{
    
return dispatch=>{
    Axios.post(`http://localhost:3000/viewAnswer/${token}&id=${id}`)
    .then((res)=>{
      
       dispatch(viewanswerInitialState(res.data.answers,res.data.id))
    })
}

}
export const resetViewAnswer=()=>{
    return{
        type:actionTypes.RESET_VIEWANSWER
    }
}

export const viewAnswerSuccess=()=>{
    return{
        type:actionTypes.VIEWANSWER_SUCCESS
    }
}

export const viewAnswerAdd=(token,answerData,q_id)=>{
    return dispatch=>{
        const answerValue={
            answer:answerData
        }
        Axios.post(`http://localhost:3000/create${token}&q_id=${q_id}`,answerValue)
        .then((res)=>{
            dispatch(viewAnswerSuccess())
        })
    }
}

export const canRelodResetAnswer=()=>{
    
    return{
        type:actionTypes.Can_Reload_Reset_Answer
    }
}

export const likeAdded=()=>{
    return{
        type:actionTypes.Like_Added
    }
}
export const like=(token,id)=>{

    return dispatch=>{
        Axios.post(`http://localhost:3000/like/${token}&ans_id=${id}`)
        .then(res=>{
            dispatch(likeAdded())
        })
    }
}

export const DislikeAdded=()=>{
    return{
        type:actionTypes.Dis_Like_Added
    }
}
export const disLike=(token,id)=>{
   
    return dispatch=>{
        Axios.post(`http://localhost:3000/dislike/${token}&ans_id=${id}`)
        .then(res=>{
            dispatch(DislikeAdded())
        })
    }
}