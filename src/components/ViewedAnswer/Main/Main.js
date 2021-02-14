import React,{useState} from 'react';
import classes from './Main.module.css';
import MoreOption from '../../UI/MoreOption/MoreOption';
import Tag from '../../UI/Tag/Tag';
import Button from '../../UI/Button/Button';
import Profile from '../../UI/Profile/Profile';
import AnswerList from './AnswerList/AnswerList';
import Backdrop from '../../UI/Backdrop/Backdrop';
import AnswerPopUp from './AnswerPopUp/AnswerPopUp'
const Main=(props)=>{
    const [opnerQuestion,setOpnerQuestion]=useState(false);
    const [showAnswerInput,setShowAnswerInput]=useState(false);
    let OptionClassQuesiton=[classes.MoreOptionContainerQuestion];
    
    const showMoreOptionQuestion=(event)=>{
        setOpnerQuestion(!opnerQuestion);
            
    }
    const showAnswerInputHandler=()=>{
        setShowAnswerInput(true);
    }
    const hidePopupHandler=()=>{
        setShowAnswerInput(false);
    }

    if(opnerQuestion)
    {
        OptionClassQuesiton=[classes.MoreOptionContainerQuestion,classes.OptionShow];
    }
 
    return(
    
        <div className={classes.Main}>
        <AnswerPopUp show={showAnswerInput} clicked={hidePopupHandler}/>
            <Backdrop show={showAnswerInput} clicked={hidePopupHandler}/>
            <div className={classes.TopPart}>
                <div className={classes.AnswerQuestionContainer}>
                <div className={classes.Upper}>
                <div className={classes.ProfileContaier}>
                    <Profile>5 hrs ago</Profile>
                </div>
                <div className={classes.moreOptions} >
        <button className={classes.OptionAnchor} onClick={showMoreOptionQuestion}>
        ...
     </button>
              
              <div className={OptionClassQuesiton.join(' ')}><MoreOption/></div>
                    </div>
                </div>
                    <h1 className={classes.AnswerQuestionHeading}>What is java?</h1>
                    <div className={classes.TagAndButton}>
                    <div className={classes.TagContainer}>
                        <Tag/>
                    </div>
                    <div className={classes.AnswerQuestionButton}>
                        <Button btnType="OnlyClick" show={showAnswerInputHandler}>Add Answer</Button>
                    </div>
                    </div>
                    <div className={classes.AnswerCount}>
                        <p>3 Answer</p>
                    </div>
                </div>
            </div>
            <div className={classes.BottomPart}>
                    <AnswerList/>
                    <AnswerList/>
                    
                    
            </div>
            
        </div>
    )
}
export default Main;