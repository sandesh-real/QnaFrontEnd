import Axios from 'axios';
import * as actionTypes from './actionTypes';

export const addQuestionSuccess=()=>{
    return{
        type:actionTypes.ADD_QUESTION_SUCCESS
    }
}

export const addQuestion=(token,askQuestion)=>
{

    return dispatch=>{
        const quesitonData={
            title:askQuestion.question.value,
            subjectname:askQuestion.subject.value
        }
        
        Axios.post(`http://localhost:3000/question/create${token}`,quesitonData)
        .then((res)=>{
            dispatch(addQuestionSuccess());
            console.log("quesiont added");
        })
    }
}

export const canRelodReset=()=>{
    
    return{
        type:actionTypes.Can_Reload_Reset
    }
}


/***************************search************************** */
export const setSearchColletion =(searchColl)=>{
   return{
    type:actionTypes.Set_SEARCH_Collection,
    searchColl:searchColl
   }
}

export const searchColl=(data,token)=>{
    return dispatch=>{
    Axios.post(`http://localhost:3000/test/${token}&search=${data}`)
    .then((res)=>{
       
        dispatch(setSearchColletion(res.data.newFilterTitle));
    })
    }
}

export const setQuestionForMore=(moreRelatedQuestion)=>{
 
return{
    type:actionTypes.Set_Question_For_More_Question,
    moreRelatedQuestion:moreRelatedQuestion

}
}
export const setMoreQuestion=(token,id,dataColl)=>{
    
    return dispatch=>{
        const data={
            searchColl:dataColl
        }
        Axios.post(`http://localhost:3000/moresearchQuestion/${token}&id=${id}`,data)
        .then((res)=>{
            localStorage.setItem('moreQuestion',JSON.stringify(res.data.moreQuestionCollection));
            dispatch(setQuestionForMore(res.data.moreQuestionCollection));
        })
    }
}
export const setMoreQuestionAgain=()=>{
    return dispatch=>{
        const getData= JSON.parse(localStorage.getItem('moreQuestion'));
       
        dispatch(setQuestionForMore(getData))
    }
 
}