import React,{useState} from 'react';
import classes from './AskQuestionPopup.module.css';
import Input from './Input/Input';
import Aux from '../../../../hoc/Auxilary/Auxilary';
import Profile from '../../../UI/Profile/Profile';
import Button from '../../../UI/Button/Button'

const AskQuestionPopup =(props)=>{
    const [askQuestion,setAskQuestion]=useState({
        question:{
            elementType:'textarea',
            selectType:'',
            elementConfig:{
                placeholder:"Asked question in simple and  clear form"

            },
            value:''
        },
    
        Annonymity:{
            elementType:'select',
            selectType:'subject',
            elementConfig:{
                options:[{value:'java',displayValue:'Java'},
                        { value:'ADBMS',displayValue:'ADBMS'}]
            },
            value:''
        },
        subject:{
            elementType:'select',
            selectType:'annonymity',
            elementConfig:{
                options:[{value:'private',displayValue:'Private(profile visible)'},
                        { value:'public',displayValue:'Public(profile hidden)'}]
            },
            value:''
        }
    });
    const inputChangeHandler=(event,inputIdentifier)=>{
            const updateOrderForm={
                ...askQuestion
            }
           
            const updateFormElement={...updateOrderForm[inputIdentifier]}
           
            updateFormElement.value=event.target.value;
            updateOrderForm[inputIdentifier]=updateFormElement;
            setAskQuestion(updateOrderForm);
    }
    const formElementArray=[];
    for(let key in askQuestion)
    {
        formElementArray.push({
            id:key,
            config:askQuestion[key],
        })
    }

    let form=(<form className={classes.form} onSubmit={props.AskQuestionSubmitHandler}>
    <div className={classes.ProfileContainer}>
        <Profile />
    </div>
      

    {formElementArray.map((formElement)=>(
       
        <Input clicked={(event)=>inputChangeHandler(event,formElement.id)} value={formElement.config.value} key={formElement.id} selectType={formElement.config.selectType} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig}/>
    ))}
        <div className={classes.btnContainerPosition}>
        <Button btnType="Success">Add your Question</Button>
        </div>
    </form>)
    return(
        <Aux>
        {props.isShow?<div className={classes.AskQuestionPopup}>
           <button className={classes.cross} onClick={props.clicked}>X</button>

           {form}
       
           
        </div>:null}
        </Aux>
    )
}
export default AskQuestionPopup;