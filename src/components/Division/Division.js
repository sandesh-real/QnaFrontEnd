import React from 'react';
import classes from './Division.module.css';
import DivisionButton from './DivisionButton/DivisionButton';
const Division =(props)=>{
   
    return (
        <div className={classes.Division}>
            <div className={classes.Top}>
                <h2>QnA</h2>
            </div>
            <div className={classes.Bottom}>
                <h1>Select your Division</h1>
                {props.isSem? <div className={classes.DivisionContainer}>
            
              <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'first',year:'first'}}>First Sem</DivisionButton>
              <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'second',year:'first'}}>Second Sem</DivisionButton>  
              <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'third',year:'second'}}>third Sem</DivisionButton>
              <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'fourth',year:'second'}}>fourth Sem</DivisionButton>
              <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'fifth',year:'third'}}>Fifth Sem</DivisionButton>
              <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'sixth',year:'third'}}>Sixth Sem</DivisionButton>
              <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'seventh',year:'fourth'}}>Seventh Sem</DivisionButton>
              <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'eighth',year:'fourth'}}>Eight Sem</DivisionButton>
            </div>:<div className={classes.DivisionContainer}>
            
            <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'0',year:'first'}}>First Year</DivisionButton>
            <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'0',year:'second'}}>Second Year</DivisionButton>  
            <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'0',year:'third'}}>third Year</DivisionButton>
            <DivisionButton isSem={props.isSem} userId={props.userId}  divisionSelect={props.divisionSelect} value={{sem:'0',year:'fourth'}}>fourth Year</DivisionButton>
           
          </div>}
                </div>
            </div>
      
    )
}
export default Division;