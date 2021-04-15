import React, { useState, useEffect } from "react";
import classes from "./Question.module.css";
import Button from "../Button/Button";
import { connect } from "react-redux";
import Backdrop from "../Backdrop/Backdrop";
import Tag from "../Tag/Tag";
import Profile from "../Profile/Profile";
import MoreOption from "../MoreOption/MoreOption";
import ReactHtmlParser from "react-html-parser";
import * as actions from "../../../store/actions/index";
import axios from 'axios';
const Question = (props) => {
  const [opner, setOpner] = useState(false);
  const [votes,setVotes]=useState(0);
  const [alreadyVoteDown,setAlreadyVoteDown]=useState(false);
  const [alreadyVoteUp,setAlreadyVoteUp]=useState(false);
  const {ongetVotes,token,id,userId}=props;
  useEffect(() => {
    axios.get(`http://localhost:3000/getVotes/${token}&q_id=${id}`)
    .then((res)=>{
      setVotes(res.data.votes)
     let user_id= res.data.userVote.slice(0,res.data.userVote.length-4)
     let incDec=res.data.userVote.slice(res.data.userVote.length-4,res.data.userVote.length)
     
     console.log(user_id===`,${userId}`);
     if(user_id===`,${userId}` && incDec==='inc')
     {
     setAlreadyVoteUp(true)
       
    }
    else{
      setAlreadyVoteDown(true)
    }
    
  }, [ongetVotes,token,id,userId]);
  });
  let OptionClass = [classes.MoreOptionContainer];
  const onVoteChanges = (val) => {
    console.log(props.id)
    axios.post(`http://localhost:3000/voteChange/${props.token}`,{ q_id: props.id, val: val })
    .then((res)=>{
       
        setVotes(res.data.votes)
    })
    
  };
  const showMoreOption = (event) => {
    setOpner(!opner);
  };
  const BackdropHandler = () => {
    setOpner(false);
  };

  if (opner) {
    OptionClass = [classes.MoreOptionContainer, classes.OptionShow];
  }
  const [isShownInc, setIsShownInc] = useState(false);
  const [isShownDec, setIsShownDec] = useState(false);
  const onMouseHover = (value,title) => {
    if(title==='inc')
    {
        setIsShownInc(value);
    }
    if(title==='dec')
    {
        setIsShownDec(value);
    }
    
  
 
  };
  return (
    <div className={classes.QuestionBox}>
      <div className={classes.QuestionVote}>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => onMouseHover(true,'inc')}
          onMouseLeave={() => onMouseHover(false,'inc')}
        >
          <button
            className={classes.VoteUpBtn}
            onClick={() => onVoteChanges("inc")}
          >
            <i className="fas fa-sort-up"></i>
          </button>
          {isShownInc ? (
            <div className={classes.voteInfo}>
              <p>Higher the value more clear question</p>
            </div>
          ) : null}
        </div>
        {/* style={{color:alreadyVoteUp?"red":"#000"}}*/}
        <button onClick={() => onVoteChanges("inc")} className={classes.voteValue}  >{votes}</button>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => onMouseHover(true,'dec')}
          onMouseLeave={() => onMouseHover(false,'dec')}
        >
         {/* style={{color:alreadyVoteDown?"red":"#000"}} */}
          <button
            className={classes.VoteUpBtn}
            onClick={() => onVoteChanges("dec")}
           
          >
            <i className="fas fa-sort-down"></i>
          </button>
          {isShownDec ? (
            <div className={classes.voteInfo}>
              <p>Lower the vaule less clear question</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className={classes.Question}>
        <div className={classes.TwoPart}>
          <p className={classes.RecommendateText}>Recommendate For You</p>

          <div className={classes.moreOptions}>
            <button className={classes.OptionAnchor} onClick={showMoreOption}>
              ...
            </button>
            <Backdrop
              type="transparent"
              show={opner}
              clicked={BackdropHandler}
            ></Backdrop>
            <div className={OptionClass.join(" ")}>
              <MoreOption
                DeleteHandler={props.DeleteHandler}
                isThisMyColl={props.isThisMyQuestionColl}
              />
            </div>
          </div>
        </div>

        <Profile
          otherUserId={props.otherUserId}
          annonymity={props.annonymity}
          friendRequestshow="true"
          username={props.username}
          avatar={props.avatar}
        >
         {props.questionCreated}
        </Profile>

        <h1 className={classes.QuestionText}>
          {ReactHtmlParser(props.children)}
        </h1>

        {/* {{!-- <div class="question-image">
                        <img src="../image/html/{3AA6A9A0-1738-4A0E-A8D3-E232218068D1}.png.jpg" alt="fsdfds" >

                    </div> --}} */}

        <div className={classes.LowerPart}>
          <div className={classes.TagContainer}>
            <Tag />
          </div>

          <div className={classes.QuestionBtn}>
            {props.isAnswer ? (
              <Button
                id={props.id}
                viewAnswerHandler={props.viewAnswerHandler}
                btnType="OnlyClick"
                to="/viewedanswer"
              >
                View Answer
              </Button>
            ) : (
              <Button btnType="OnlyClick" id={props.id} to="/viewedanswer">
                Not Answer Yet
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    // votes: state.Question.votes,
    token: state.auth.token,
    userId:state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVoteChange: (token, data) => dispatch(actions.voteChange(token, data)),
    ongetVotes: (token, id) => dispatch(actions.voteGet(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
