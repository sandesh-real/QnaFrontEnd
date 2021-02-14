import React,{useState} from 'react';
import classes from './AskQuestion.module.css';
import AskQuestionPopup from './AskQuestionPopup/AskQuestionPopup';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Backdrop from '../../UI/Backdrop/Backdrop';
const AskQuestion=(props)=>{
    const [showPopup,setShowPopup]=useState(false);

    const showPopupHandler=()=>{
        setShowPopup(true);
    }
    const hidePopupHandler=()=>{
        setShowPopup(false);
    }
    return(
        <Aux>
        <AskQuestionPopup clicked={hidePopupHandler} isShow={showPopup} AskQuestionSubmitHandler={props.AskQuestionSubmitHandler} />
        <Backdrop show={showPopup} clicked={hidePopupHandler}/>
        <div className={classes.AskQuestion}>
                     <a href="../navExplore/profiles/{{token}}" className={classes.QuestionProfile}>SAndesh</a>
                    <button className={classes.askQuestionBox} id="question-btn" onClick={showPopupHandler}>
                    <h2>What is your Question?</h2>
                    <p className={classes.QuestionClick}>(click to add)</p>
                    </button>
            </div>
            </Aux>
    )
    
}
export default AskQuestion;