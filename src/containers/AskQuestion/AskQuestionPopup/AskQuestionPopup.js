import React,{useState} from 'react';
import classes from './AskQuestionPopup.module.css';
import Input from './Input/Input';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Profile from '../../../components/UI/Profile/Profile';
import Button from '../../../components/UI/Button/Button';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
const AskQuestionPopup =(props)=>{
  
    const subjectValue=props.subjects.map((subject)=>{
        return { value:subject.subjectname,displayValue:subject.subjectname}
    })
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
            selectType:'annonymity',
            elementConfig:{
                options:[{value:'private',displayValue:'Private(profile visible)'},
                        { value:'public',displayValue:'Public(profile hidden)'}]
            },
            value:''
        },
        subject:{
        
            elementType:'select',
            selectType:'subject',
            elementConfig:{
                options:subjectValue
            },
            value:''
        }
    });
    const inputChangeHandler=(event,editor,inputIdentifier)=>{
            const updateOrderForm={
                ...askQuestion
            }
           
            const updateFormElement={...updateOrderForm[inputIdentifier]}
            if(editor){
                updateFormElement.value=editor.getData();
            }
            else{
                updateFormElement.value=event.target.value;
            }
          
            updateOrderForm[inputIdentifier]=updateFormElement;
            setAskQuestion(updateOrderForm);
    }

   const AskQuestionSubmitHandler=(event)=>{
       event.preventDefault();
   
        props.addingquestion(props.token,askQuestion);
      
        props.clicked();
        window.location.reload();
   }
    
    const formElementArray=[];
    for(let key in askQuestion)
    {
        formElementArray.push({
            id:key,
            config:askQuestion[key],
        })
    }

    let form=(<form className={classes.form} onSubmit={AskQuestionSubmitHandler}>
    <div className={classes.ProfileContainer}>
        <Profile username={props.username} token={props.token} />
    </div>
       

    {formElementArray.map((formElement)=>(
       
        <Input clicked={(event,editor)=>inputChangeHandler(event,editor,formElement.id)} value={formElement.config.value} key={formElement.id} selectType={formElement.config.selectType} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig}/>
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
const mapStateToProps=(state)=>{
    return{
        token:state.auth.token,
        subjects:state.auth.subjects,
        username:state.auth.username
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addingquestion:(token,askQuestion)=>dispatch(actions.addQuestion(token,askQuestion)),
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AskQuestionPopup);