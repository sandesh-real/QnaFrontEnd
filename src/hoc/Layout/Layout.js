import React, { useEffect, useState } from "react";
import Aux from "../Auxilary/Auxilary";
import HEADER from "../../components/Header/Header";
// import Sidebar from "../../components/main/Sidebar/Sidebar";
import classes from "./Layout.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';

const Layout = (props) => {
  const [friendReqNoti] = useState(props.friendReqNoti);
  const [randomReqNoti] = useState(props.randomReqNoti);
  let classesLogOut = [classes.navContainerListBtn];
  useEffect(() => {
    if (friendReqNoti === false) {
      props.onNotiCheck(props.token);
    }
    if (randomReqNoti === true) {
      props.onNotiCheckRandom(props.token);
    }

  }, [props, friendReqNoti, randomReqNoti]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isShown,setIsShown]=useState(false);

  let classNotification=[classes.navContainerListNavBtn];

  if(props.friendReqNoti || !props.randomReqNoti)
  {
    classNotification=[classes.navContainerListNavBtn,classes.notiActive]
  }

  const showSidebarHandler = () => {
    setShowSidebar(true);
  };
  // const closeSidebarHandler = () => {
  //   setShowSidebar(false);
  // };
  const LogoutHandler = () => {
    props.dologout(props.token);
    console.log(props.allDone);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  let changeUppeMainContainer=[classes.sideFoldableNav]
  let chageOtherBodyContain=[classes.otherBodyContain]
    if(isShown)
  {
    changeUppeMainContainer=[classes.sideFoldableNav,classes.sideFoldableNavFullOpen];
    chageOtherBodyContain=[classes.otherBodyContain,classes.otherBodyContainBig]
  }

  const onMouseHover=(value)=>{
    setTimeout(()=>{
      setIsShown(value)
    },200)
   
  }

  return (
    <Aux>
      <div className={classes.upperMainContainer}>
        <div
          className={changeUppeMainContainer.join(' ')}
          onMouseEnter={() =>onMouseHover(true) }
          onMouseLeave={() =>onMouseHover(false)}
        >
          <ul className={classes.navContainerLists}>
            <li className={classes.navContainerListBtn} id={classes.Home}><NavLink to='/' exact className={classes.navContainerListNavBtn}><i className="fas fa-home"></i> {isShown?<span className={classes.NavIconText}>Home</span>:null}</NavLink></li>

            <li className={classes.navContainerListBtn}><NavLink to="/notifications"  className={classNotification.join(' ')} ><i className="fas fa-bell"></i>{isShown?<span className={classes.NavIconText}>Notification</span>:null}</NavLink></li>
        
         <li className={classes.navContainerListBtn}><NavLink to="/profile" className={classes.navContainerListNavBtn}><i className="fas fa-user"></i>{isShown?<span className={classes.NavIconText}>Profile</span>:null}</NavLink></li>
            <li className={classesLogOut.join(" ")}>
              <button
                onClick={LogoutHandler}
                className={classes.navContainerListNavBtn}
              >
                <i className="fas fa-power-off"></i>{isShown?<span className={classes.NavIconText}>Logout</span>:null}
              </button>
            </li>
          </ul>
        </div>
        <div className={chageOtherBodyContain.join(" ")}>
          <HEADER
            searchColl={props.searchColl}
            randomReqNoti={props.randomReqNoti}
            friendReqNoti={props.friendReqNoti}
            LogoutHandler={LogoutHandler}
            show={showSidebarHandler}
            isShow={showSidebar}
          />

          {/* <Sidebar
            randomReqNoti={props.randomReqNoti}
            friendReqNoti={props.friendReqNoti}
            LogoutHandler={LogoutHandler}
            isShow={showSidebar}
            closed={closeSidebarHandler}
          /> */}
          <main className={classes.main}>{props.children}</main>
        </div>
      </div>
    </Aux>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    redirect: state.auth.redirect,
    friendReqNoti: state.notification.friendReqNoti,
    randomReqNoti: state.notification.randomReqNoti,
    allDone: state.auth.allDone,
    searchColl: state.Question.searchColl,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dologout: (token) => dispatch(actions.logout(token)),
    onNotiCheck: (token) => dispatch(actions.friendNotiCheck(token)),
    onNotiCheckRandom: (token) => dispatch(actions.randomNotiCheck(token)),
    onSearchSet: (data, token) => dispatch(actions.searchColl(data, token)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
