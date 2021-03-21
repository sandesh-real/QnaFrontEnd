import React,{useEffect, useState,useRef} from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import classes from './Authentication.module.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Auxilary/Auxilary'
import {quotes,myTeam} from '../../Constant';
import Loding from '../../helperComponent/Loader/Loader'

const Authentication =(props)=>{
    const [toggleAuth,setToggleAuth]=useState(true);
    const [index,setIndex]=useState(0);
    const [circleDesign,setCircleDesign]=useState(false);
    const [teamChange,setTeamChange]=useState(0);
    const [btnText]=useState("Meet Our Team");
    const btnName=useRef();


    useEffect(()=>{
        if(!props.faculty){
            props.onSetFaculty();
            
        }
       
    },[props])
    useEffect(()=>{
        let timeUp=setInterval(()=>{
            if(index===quotes.length)
            {
                setIndex(0)
                return;
            }
            setIndex(index+1);
          
        },3000)
        return ()=>{
            clearInterval(timeUp)
        }
    },[index])
   

   let LoginClasses=[classes.LoginBtn];
   let SignUpClasses=[classes.SignUpBtn];
   let circleDesignClass=[classes.circleDesign];
   let buttonCircleDesign=[classes.teamBtn];
   if(circleDesign)
   {
    circleDesignClass.push(classes.circleDesignBig);
    buttonCircleDesign.push(classes.teamBtnChange);
   

   }
   
    const LoginHandler=(props)=>{
        setToggleAuth(true);
    }
    const SignUpHandler=()=>{
        setToggleAuth(false);
    }
    if(toggleAuth===true)
    {
        LoginClasses=[classes.LoginBtn,classes.active];
        SignUpClasses=[classes.SignUpBtn];
    }
    else
    {
        LoginClasses=[classes.LoginBtn];
        SignUpClasses=[classes.SignUpBtn,classes.active];
    }
    const checkIndex=(index)=>{
        
        if(index===myTeam.length)
        {
            
            return 0;
        }
        if(index<0)
        {
            return myTeam.length-1;
        }
        console.log(index);
        return index;
    }
   const onTeamBtnClick=()=>{
       if(btnName.current.innerText==='Meet Our Team'){
           btnName.current.innerText='Back To Login';
       }
       else{
        btnName.current.innerText='Meet Our Team';

       }
    setCircleDesign(!circleDesign)
   }
   if(props.isLoading){
   return <Loding/>
   }
    return(
        <Aux>
      
        <div className={classes.StartPage}>
   
   
  
       
        <div className={classes.AuthContainer}>
        <div className={classes.AuthBtn}>
            <button className={LoginClasses.join(' ')} onClick={LoginHandler}>Login</button>
            <button className={SignUpClasses.join(' ')} onClick={SignUpHandler}>Register</button>

        </div>
        <div className={classes.loginSingUpContainer}>
  {toggleAuth   ?<Login/>:
        <Signup {...props} faculty={props.faculty}/>}
        {/* {true?<Signup/>:
        <Login/>} */}
        </div>
      
        </div>
 
       
        <div className={circleDesignClass.join(' ')}>
        <button ref={btnName} onClick={onTeamBtnClick} className={buttonCircleDesign.join(' ')}>{btnText}</button>

            <div className={!circleDesign?classes.circleDesignInfo:classes.circleDesignInfoProfile}>
           {!circleDesign?<div className={classes.circlefirstItem}>           
                 <h1>QnA</h1>
                <h2> &ldquo;{quotes[index]} &rdquo; <span>-sandesh</span></h2>
                </div>:
                <div className={classes.CircleSecondItem}>
                
                    <div className={classes.circleProfile}>
                <div className={classes.ImageBox}>
                    <img src={myTeam[teamChange].img} alt="haha"/>
                </div>
                <div className={classes.profileInfo}>
                    <h3>{myTeam[teamChange].name}</h3>
                    <p>{myTeam[teamChange].info}</p>
                </div>
                </div>
                
               
                <button onClick={()=>setTeamChange(checkIndex(teamChange-1))} className={classes.buttonLeft}></button>
                <button onClick={()=>setTeamChange(checkIndex(teamChange+1))} className={classes.buttonRight}></button>
                </div>}

            </div>
            
        </div>
        </div>
     
    <footer>
      <p>QnA &copy; 2020</p>
    </footer>
    </Aux>
    )
}
const mapStateToProps=(state)=>{
    return{
        faculty:state.auth.faculty,
        isLoading:state.auth.isLoading
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        onSetFaculty:()=>dispatch(actions.authPageStart())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Authentication);