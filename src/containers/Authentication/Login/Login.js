import React,{useState} from 'react'
import classes from './Login.module.css';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../../components/UI/Button/Button';
import Input from '../InputLogin/Input';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

const Login =(props)=>{
    const [userDetailLogin,setUserDetailLogin]=useState({
        Email:{
            elementType:'input',
            selectType:'',
            elementConfig:{
                type:"email",
                // placeholder:"Email..."

            },
        
            value:''
        },
        Password:{
            elementType:'input',
            selectType:'',
            elementConfig:{
                type:"password",
                // placeholder:"Password...",

            },
            value:''
        },
       
    });
    const [ formValidation,setFormVaildatoin]=useState([]);
    const inputChangeHandler=(event,inputIdentifier)=>{
        const updateOrderForm={
            ...userDetailLogin
        }
       
        const updateFormElement={...updateOrderForm[inputIdentifier]}
       
        updateFormElement.value=event.target.value;
        updateOrderForm[inputIdentifier]=updateFormElement;
        setUserDetailLogin(updateOrderForm);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        if(userDetailLogin.Email.value==='' || userDetailLogin.Password.value==='' )
        {
            setFormVaildatoin(["All fields are mandatory"])
            return;
        }
        setFormVaildatoin([])
        props.onAuth(userDetailLogin.Email.value,userDetailLogin.Password.value,props.token);
      
     
        
    }
const formElementArray=[];
for(let key in userDetailLogin)
{
    formElementArray.push({
        id:key,
        config:userDetailLogin[key],
    })
}
let form=(<form style={{position:"relative"}} onSubmit={(event)=>submitHandler(event)}>
        <span className={classes.errorMessage} >{formValidation.length>0?formValidation:props.error}</span>
    {formElementArray.map((formElement)=>(
       
        <Input clicked={(event)=>inputChangeHandler(event,formElement.id)} value={formElement.config.value} key={formElement.id} selectType={formElement.config.selectType} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} label={formElement.id}/>
    ))}
        <div className={classes.ForgetPassword}>
            <p>Forgot your password?</p>
        </div>
        <div className={classes.btnContainerPosition}>
        <Button  btnType="OnlyClick">Login</Button>
        </div>
        <div className={classes.OrSeprator}>
           <span className={classes.dash}></span>
           <span className={classes.Or}>OR</span>
           <span className={classes.dash}></span>
        </div>
        <div className={classes.LoginWithGoogle}>
            <button><i className="fab fa-google"></i> Login with google</button>
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
        token:state.auth.token,
        error:state.auth.error,
 
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onAuth:(email,password)=>dispatch(actions.auth(email,password))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);