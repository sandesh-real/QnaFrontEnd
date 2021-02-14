import React,{useState,useEffect} from 'react'
import classes from './Signup.module.css';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../../components/UI/Button/Button';
import Input from '../InputSignup/Input';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
// import {Redirect} from 'react-router-dom';
const Signup =(props)=>{
 
    const facultyValue=props.faculty.map((faculty)=>{
        return{
            value:faculty.name,
            displayValue:faculty.name
        }
    })
  
    useEffect(()=>{
      
       if(props.isSuccess)
       {
          return props.history.push('/division');
       } 
    })
    const [userDetailSignup,setUserDetailSignup]=useState({
        FullName:{
            elementType:'input',
            selectType:'',
            elementConfig:{
                type:"text",
                placeholder:"FirstName..."

            },
            value:''
        },
        UserName:{
            elementType:'input',
            selectType:'',
            elementConfig:{
                type:"UserName",
                placeholder:"UserName..."

            },
            value:''
        },
       
        Email:{
            elementType:'input',
            selectType:'',
            elementConfig:{
                type:"email",
                placeholder:"Email..."

            },
            value:''
        },  
    
        Password:{
            elementType:'input',
            selectType:'',
            elementConfig:{
                type:"password",
                placeholder:"Password...",

            },
            value:''
        },
        Faculty:{
            elementType:'select',
            selectType:'Faculty',
            elementConfig:{
                options:facultyValue
            },
            value:''
        }
    });
    const inputChangeHandler=(event,inputIdentifier)=>{
        const updateOrderForm={
            ...userDetailSignup
        }
       
        const updateFormElement={...updateOrderForm[inputIdentifier]}
       
        updateFormElement.value=event.target.value;
        updateOrderForm[inputIdentifier]=updateFormElement;
        setUserDetailSignup(updateOrderForm);
}
const submitHandler=(event)=>{
    event.preventDefault();
    props.onRegister({FullName:userDetailSignup.FullName.value,UserName:userDetailSignup.UserName.value,Email:userDetailSignup.Email.value,Password:userDetailSignup.Password.value,Faculty:userDetailSignup.Faculty.value});

  
}
const formElementArray=[];
for(let key in userDetailSignup)
{
    formElementArray.push({
        id:key,
        config:userDetailSignup[key],
    })
}
let form=(<form onSubmit={(event)=>submitHandler(event)}>
 
    {formElementArray.map((formElement)=>(
       
        <Input clicked={(event)=>inputChangeHandler(event,formElement.id)} value={formElement.config.value} key={formElement.id} selectType={formElement.config.selectType} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} label={formElement.id}/>
    ))}
        <div className={classes.btnContainerPosition}>
        <Button btnType="OnlyClick">SignUp</Button>
        </div>
    </form>)
    return(
       <Aux>
           {form}
       </Aux>
    )
}
const mapStateToProps=(state)=>{
    return{
        isSuccess:state.auth.isSuccess,
        faculty:state.auth.faculty
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onRegister:(SignUpDetail)=>dispatch(actions.signUpValue(SignUpDetail))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);