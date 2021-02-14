import React from 'react';
import './AdminLogin.css';
 const AdminPanel=(props)=>{
     const onAdminSubmitHandle=(e)=>{
         e.preventDefault();
         props.history.push('/admin-dashboard')
         console.log(props)
     }
    return(
        <div className="admin-login-form-container">

        <div className="main-login-form-container">
            <h1 className="main-login-title">Login</h1>
        <form className="main-form" onSubmit={onAdminSubmitHandle}>
            <div className="textBox">
            <label htmlFor="username" className="usernameLabel">UserName:</label>
            <input type="text" className="usernameText" name="name" id="username" placeholder="Enter your username"/>
        </div>
        <div className="PasswordBox">
            <label htmlFor="password" className="passwordLabel">Password:</label>
            <input type="password" className="passwordText" name="password" placeholder="Enter your password"/>
        </div>
        
            <button className="admin-login-form-btn">Login</button>
           

        </form>
    
    </div>
    </div>
    )
}


export default AdminPanel;