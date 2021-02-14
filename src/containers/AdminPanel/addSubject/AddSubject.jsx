import React, { useState } from 'react';
import './AddSubject.css';
import '../AdminLogin.css';
import axios from  'axios';
const AddSubject=(props)=>{
    const [addSubject,SetAddSubject]=useState({
        subjectname:"",
        faculty_name:"Bsc.Csit",
        sem_name:"first",
        year_name:"first",

    })
    const onSubmitAddSubject=(e)=>{
        e.preventDefault();
        console.log(addSubject);
        axios.post('http://localhost:3000/addsubject',addSubject);
    }
    const onChangeHandler=(e)=>{
        const newAddSubject=addSubject;
        newAddSubject[e.target.name]=e.target.value;
        SetAddSubject(newAddSubject);
    }
    return(
         <>
   
       <div className="form-container">
        <div className="form-container-inside">
           <h1 className="addsubject-title">Add Subject</h1>
            <form onSubmit={onSubmitAddSubject} className="addsubjectForm">
                <div className="subjectName-container">
                    <label htmlFor="name" className="subjectName-label">Name</label>
                    <input onChange={onChangeHandler} type="text" className="subjectName-input" name="subjectname" autoComplete="off"/>
                </div>

                  <div className="faculty-container">
                    <label htmlFor="faculty" className="faculty-label">Faculty</label>
                   
                    {props.subjectInfo?
                    <select  onChange={onChangeHandler} name="faculty_name" id="faculty" className="faculty-input">
          
                        {props.subjectInfo.faculty.map((item)=>{
                            return <option key={item._id} value={item.name}>{item.name}</option>
                        })}
                       
                       
                    </select>:<select name="faculty_name" id="faculty" className="faculty-input">
                     <option>No Faculty</option>
   
            </select>
                }
                </div>
                 <div className="sem-container">
                    <label htmlFor="sem" className="sem-label">Sem</label>
                 
                    {props.subjectInfo?
                    <select  onChange={onChangeHandler} name="sem_name" id="sem_name" className="sem-input">
          
                        {props.subjectInfo.sem.map((item)=>{
                            return <option key={item._id} value={item.semname}>{item.semname}</option>
                        })}
                       
                       
                    </select>:<select name="faculty_name" id="faculty" className="faculty-input">
                     <option>No sem</option>
   
            </select>
                }
                </div>
                  <div className="year-container">
                    <label htmlFor="year" className="year-label">Year</label>
                
                             
                    {props.subjectInfo?
                    <select  onChange={onChangeHandler} name="year_name" id="year_name" className="year-input">
          
                        {props.subjectInfo.year.map((item)=>{
                            return <option key={item._id} value={item.name}>{item.name}</option>
                        })}
                       
                       
                    </select>:<select name="faculty_name" id="faculty" className="faculty-input">
                     <option>No year</option>
   
            </select>
                }
                </div>
                
                 <input type="submit" value="submit" className="faculty-btn"/>
            </form>
            </div>
       </div>



</>
    )
}
export default AddSubject;