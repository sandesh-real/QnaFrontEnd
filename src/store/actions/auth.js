 import * as actionTypes from './actionTypes';
 import axios from 'axios';
import Axios from 'axios';


 const getFaculty=(faculty)=>{
  
    return{
        type:actionTypes.Auth_Page_start,
        faculty:faculty

    } 
 }
 export const authPageStart=()=>{
     return (dispatch)=>{
   
        axios.get('http://localhost:3000/authpage').then((response)=>{
            dispatch(getFaculty(response.data.facultyName));
        })
     }
 

 }
 
 export const  authLogin=(question)=>{
        
     return{
         type:actionTypes.Auth_login,
         question:question,
         
     }
 }
 export const auth=(email,password)=>{
    
    return (dispatch,state)=>{
      
                const authData={
            email:email,
            password:password
        }
        axios.post('http://localhost:3000/user/login',authData)
        .then((res)=>{
        if(res.data.message)
        {
            dispatch(authLogin(res.data.message));
        }
        else{
            
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('allDone',res.data.allDone);
            const homeDetail={questions:res.data.questions,subjects:res.data.subjects,divisionsem:res.data.divisionsem,divisionyear:res.data.divisionyear,isSem:res.data.isSem,username:res.data.username,token:res.data.token,allDone:res.data.allDone,user_id:res.data.user_id}
           
            localStorage.setItem('homeDetail',JSON.stringify(homeDetail));
            dispatch(authLogin(homeDetail));
        }
            
            
        })
    }

 }

 export const authSignup=(isSem,isSuccess,userId,token)=>{
     return{
         type:actionTypes.Auth_Signup,
         isSem:isSem,
         isSuccess:isSuccess,
         userId:userId,
    
     }
 }


 export const signUpValue=(signUpDetail)=>{
 
     return dispatch=>{
         const authData={
             fullname:signUpDetail.FullName,
             username:signUpDetail.UserName,
             email:signUpDetail.Email,
             password:signUpDetail.Password,
             faculty:signUpDetail.Faculty
         };
         axios.post('http://localhost:3000/users',authData)
         .then((res)=>{
        
          
     
             dispatch(authSignup(res.data.sem,res.data.success,res.data.userId))
         })
     }

 }
 export const divisionSelectorController=(divisionSuccess)=>{
     return{
         type:actionTypes.Division_SELECTOR_Controler,
         divisionSuccess:divisionSuccess
     }
 }
 export const divisionSelector=(sem,userId,value)=>{
     return dispatch=>{
         const Data={
             sem:sem,
             userId:userId,
             value:value
         }
         axios.post(`http://localhost:3000/user/set/division`,Data)
         .then((res)=>{
             dispatch(divisionSelectorController(res.data.divisionSuccess))
         })
     }
 }


 export const profilePicHandler=(homeData,imgBuffer)=>{
     return{
        type:actionTypes.Profile_Pic_Handler,
      
        homeData:homeData,
        imgBuffer:imgBuffer,
        
    }

 }
 
 export const profilePic=(formData,userId)=>{
    return dispatch=>{
    
       axios.post(`http://localhost:3000/user/set/profilepicture?userId=${userId}`,formData)
       .then((res)=>{
           console.log(res);
           const homeDetail={questions:res.data.questions,subjects:res.data.subjects,divisionsem:res.data.divisionsem,divisionyear:res.data.divisionyear,isSem:res.data.isSem,username:res.data.username,token:res.data.token}

           localStorage.setItem('token',res.data.token);
           localStorage.setItem('homeDetail',JSON.stringify(homeDetail));
           dispatch(profilePicHandler(homeDetail,res.data.imgBuffer))
       }
           )
   }
}

 export const allset=()=>{
     let homeDetail=JSON.parse(localStorage.getItem('homeDetail'));
     homeDetail={...homeDetail,allDone:true}
     localStorage.setItem('homeDetail',JSON.stringify(homeDetail));
    return{
        type:actionTypes.All_set
    }
 }

 export const logoutset=(redirect)=>{
  
    localStorage.removeItem('token');
    localStorage.removeItem('homeDetail');
    localStorage.removeItem('allDone');
    localStorage.removeItem('canReloadAnswer');
    localStorage.removeItem('moreQuestion');

     return{
         type:actionTypes.Log_out_set,
         redirect:redirect
     }
 }
 
 export const logout=(token)=>{
        
    return dispatch=>{
       
        axios.post(`http://localhost:3000/user/logout${token}`).then(res=>{
           
            dispatch(logoutset(res.data.redirect));
            
            
        })
    }
 }

 export const authCheckState=()=>{
    return dispatch=>{
        const token=localStorage.getItem('token');
        const allDone=localStorage.getItem('allDone');
        if(!token && !allDone)
        {
            dispatch(logoutset());
        }
        else{
            const homeDetail=JSON.parse(localStorage.getItem('homeDetail'));
                dispatch(authLogin(homeDetail));
                
            
        }
    }
}


export const homereset=(token)=>{
    
    return dispatch=>{
        Axios.post(`http://localhost:3000/homerefresh/${token}`)
        .then((res)=>{
           
            const homeDetail={questions:res.data.questions,token:token,subjects:res.data.subjects,divisionsem:res.data.divisionsem,divisionyear:res.data.divisionyear,isSem:res.data.isSem,username:res.data.username,allDone:res.data.allDone,user_id:res.data.user_id}
           
            localStorage.setItem('homeDetail',JSON.stringify(homeDetail));
            dispatch(authLogin(homeDetail));
        })
    }
}