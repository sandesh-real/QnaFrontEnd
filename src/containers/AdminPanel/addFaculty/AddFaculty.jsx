import React, { useState } from 'react';
import '../AdminLogin.css';
import './AddFaculty.css';
import axios from 'axios';
const AddFaculty=()=>{
    const [data,setData]=useState({
        name:"",
        sem:1
    });
    const onChangeHandler=(e)=>{
        console.log(e.target.name,e.target.value)
        const newData={...data};
        newData[e.target.name]=e.target.value;
        setData(newData)
    }
    const onSubmitAddFaculty=(e)=>{
e.preventDefault();

        axios.post('http://localhost:3000/addfaculty',data)
    }
    return(
       <> 
    




       <div className="form-container">
       <div className="form-container-inside">
           <h1 className="addsubject-title">Add Faculty</h1>
            <form onSubmit={onSubmitAddFaculty} className="addsubjectForm">
                <div className="facultyName-container">
                    <label htmlFor="name" className="facultyName-label">Name</label>
                    <input onChange={onChangeHandler} type="text" className="facultyName-input" name="name" autoComplete="off"/>
                </div>
                 <div className="sem-container">
                    <label htmlFor="name" className="sem-label">Sem</label>
                    <select onChange={onChangeHandler} name="sem" id="sem" className="sem-input">
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
                 <input type="submit" value="submit" className="faculty-btn"/>
            </form>
       </div>


       </div>
    

</>  
    )
}
export default AddFaculty;