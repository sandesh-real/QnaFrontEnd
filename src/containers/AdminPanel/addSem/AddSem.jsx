import React, { useState } from 'react';

import axios from 'axios';
const AddSem=(props)=>{
    const [data,setData]=useState({
        name:"",
        year_name:"",
        index:""
    });
    const onChangeHandler=(e)=>{
        
        const newData={...data};
        newData[e.target.name]=e.target.value;
        setData(newData)
    }
    const onSubmitAddFaculty=(e)=>{
e.preventDefault();
console.log(data)
        axios.post('http://localhost:3000/sem',data)
    }
    return(
       <> 
    




       <div className="form-container">
       <div className="form-container-inside">
           <h1 className="addsubject-title">Add Sem</h1>
            <form onSubmit={onSubmitAddFaculty} className="addsubjectForm">
                <div className="facultyName-container">
                    <label htmlFor="name" className="facultyName-label">Name</label>
                    <input onChange={onChangeHandler} type="text" className="facultyName-input" name="name" autoComplete="off"/>
                </div>
                <div className="facultyName-container">
                    <label htmlFor="index" className="facultyName-label">index</label>
                    <input onChange={onChangeHandler} type="text" className="facultyName-input" placeholder="give index according to sem(first=1)" name="index" autoComplete="off"/>
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
export default AddSem;