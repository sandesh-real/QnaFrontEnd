import React,{useState,useEffect} from 'react';
import './admin.css';
import './AdminLogin.css';
import Faculty from './addFaculty/AddFaculty'
import Question from './addQuestions/AddQuestion';
import Subject from './addSubject/AddSubject';
import Year from './addYear/AddYear';
import Sem from './addSem/AddSem';

import axios from 'axios';
const  Dashboard=()=>{

    const [selectMenu,setSelectMenu]=useState('dashboard');
    const [subjectInfo,setSubjectInfo]=useState({})
    useEffect(()=>{
        axios.get('http://localhost:3000/admin').then((res)=>{
            console.log(res);
            setSubjectInfo({
                faculty:res.data.faculty,
                sem:res.data.sems,
                year:res.data.years
            })
        

    })},[])

    const onHandleMenu=()=>{
      switch(selectMenu){
          case "sem":
              return <Sem subjectInfo={subjectInfo}/>
              case "year":
                return <Year/>
          case "questions":
              return <Question/>
            case "addsubject":
                return <Subject subjectInfo={subjectInfo}/>
            case "addfaculty":
                return <Faculty/>
            default:
                return (            <div className="question-information-box">
                <div className="information-of-question">
                    <div className="number-of-question-box">
                        <h2>Number of question</h2>
                        <p>5</p>
                    </div>
                    <div className="number-of-unanswer-question-box">
                        <h2>Number of unanswer question</h2>
                        <p>5</p>
                    </div>
                </div>
            </div>)
      }
    }
const onsetSelectMenuValue=(e)=>{
    setSelectMenu(e.target.value);
}
    return(
        <>
        <header>
      
        <nav>
            <div className="nav-btn-container">
                <div className="front-end-btn">
                    <a href="/">Front</a>
                </div>
                <div className="admin-profile-information">
                    <div className="admin-profile-information-container">
                        <button  className="admin-profile">Profile name</button>
                    <div className="profile-drop-down">
                        <ul className="admin-profile-information-lists">
                            <li className="admin-profile-information-list">
                                <button>Setting</button>
    
                            </li>
                            <li className="admin-profile-information-list">
                                <a href="admin-login.html">logout</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
               
               
            </div>
      </nav>
    </header>

<main>

        <aside>
            <div className="sidebar-for-admin">
                <div className="dashboard-btn">
                    <button onClick={onsetSelectMenuValue} value="dashboard">Dashboard</button>
                </div>
                <div className="question-information sid-btn">
                    <button onClick={onsetSelectMenuValue}  value="questions">Questions</button>
                </div>
                 <div className="question-information sid-btn">
                    <button onClick={onsetSelectMenuValue} value="addsubject">Add Subject</button>
                </div>
                  <div className="question-information sid-btn">
                    <button onClick={onsetSelectMenuValue} value="addfaculty">Add Faculty</button>
                </div>
                <div className="question-information sid-btn">
                    <button onClick={onsetSelectMenuValue} value="year">Add Year</button>
                </div>
                <div className="question-information sid-btn">
                    <button onClick={onsetSelectMenuValue} value="sem">Add sem</button>
                </div>
            </div>
        </aside>
   
        <section>

            {onHandleMenu()}

        </section>

    </main>
    </>
    )
}
export default Dashboard;