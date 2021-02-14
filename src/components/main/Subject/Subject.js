import React,{useState} from 'react';
import classes from './Subject.module.css';
import Aux from '../../../hoc/Auxilary/Auxilary';
import {NavLink} from 'react-router-dom';
const Subject=(props)=>{
    const [subjectOpener,setSubjectOpener]=useState(false);
    const [openrDis,setOpnerDis]=useState(true);
    const subjectOpenerHandler=()=>{
        setSubjectOpener(true);
        setOpnerDis(false);
    }
    const subjectCloseHandler=()=>{
        setSubjectOpener(false);
        setOpnerDis(true);
    }
    let newClass=[classes.Subject,classes.SubjectCloserCss];
    if(subjectOpener)
    {
     
        newClass=[classes.Subject,classes.SubjectOpenerCss]
    }
    let opn=[classes.Opner];
    if(!openrDis)
    {
        opn=[classes.Opner,classes.OpnerDisplay];
    }
 
    return(
        <Aux>
        <button className={opn.join(' ')} onClick={subjectOpenerHandler}>Click</button>
     
        <div className={newClass.join(' ')}>
        
            <div className={classes.SubjectInternalContainer}>
            <div className={classes.SubjectHeading}>
                <h4>Seventh Sem <span onClick={subjectCloseHandler}>X</span></h4>
            </div>
           
                <ul className={classes.SubjectLists}>
                {props.subjects.map((subject)=>{
                  return  <li key={subject._id} className={classes.SubjectList}><NavLink to={{pathname:`/subjectquestion/${subject._id}`}} className={classes.SubjectListNav}>{subject.subjectname}</NavLink></li>
                })}
                    {/* <li className={classes.SubjectList}><a  className={classes.SubjectListNav} href="JAVA">Java</a></li>
                    <li className={classes.SubjectList}><a  className={classes.SubjectListNav} href="ADBMS">ADBMS</a></li>
                    <li className={classes.SubjectList}><a  className={classes.SubjectListNav} href="IT">IT</a></li>
                    <li className={classes.SubjectList}><a  className={classes.SubjectListNav} href="Project">Project</a></li> */}
                </ul>
            
         </div>
         </div>
         </Aux>
    )
}
export default Subject;