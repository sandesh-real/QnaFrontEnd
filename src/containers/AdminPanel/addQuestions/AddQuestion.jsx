import React from 'react';
import './AddQuestion.css';
import '../AdminLogin.css';
const  AddQuestion=()=>{
    return(
        <>
            <div className="question-information-table">
                <div className="questionn-table-container">
                    <table className="table-container">
                        <thead>
                        <tr className="table-row">
                            <th>S.N</th>
                            <th>Question-title</th>
                            <th>Report number</th>
                            <th colspan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                   
                        <tr className="table-row">
                            <td>2</td>
                            <td>What is the advantage of it?</td>
                            <td>3</td>
                            <td><button className="table-data-delete">Delete</button></td>
                        </tr>
                     
                    </tbody>
                    </table>
                </div>
            </div>
    </>
    )
}
export default AddQuestion;