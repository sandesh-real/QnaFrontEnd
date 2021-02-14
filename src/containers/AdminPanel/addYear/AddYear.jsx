import React, { useState } from 'react';

import axios from 'axios';
const AddYear=()=>{
    const [data,setData]=useState({
        name:"",
        index:""
    });
    const onChangeHandler=(e)=>{
        console.log(e.target.name,e.target.value)
        const newData={...data};
        newData[e.target.name]=e.target.value;
        setData(newData)
    }
    const onSubmitAddFaculty=(e)=>{
e.preventDefault();

        axios.post('http://localhost:3000/year',data)
    }
    return(
       <> 
    




       <div className="form-container">
       <div className="form-container-inside">
           <h1 className="addsubject-title">Add Year</h1>
            <form onSubmit={onSubmitAddFaculty} className="addsubjectForm">
                <div className="facultyName-container">
                    <label htmlFor="name" className="facultyName-label">Name</label>
                    <input onChange={onChangeHandler} type="text" className="facultyName-input" name="name" autoComplete="off"/>
                </div>
                <div className="facultyName-container">
                    <label htmlFor="index" className="facultyName-label">index</label>
                    <input onChange={onChangeHandler} type="text" className="facultyName-input" placeholder="give index according to year(first=1)" name="index" autoComplete="off"/>
                </div>
                 <input type="submit" value="submit" className="faculty-btn"/>
            </form>
       </div>


       </div>
    

</>  
    )
}
export default AddYear;