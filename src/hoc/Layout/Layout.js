import React, { useEffect, useRef, useState } from "react";
import Aux from "../Auxilary/Auxilary";
import HEADER from "../../components/Header/Header";
// import Sidebar from "../../components/main/Sidebar/Sidebar";
import classes from "./Layout.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";


import ShowTextPopUpLogout from "../../helperComponent/ShowTextPopUpLogout";
import ShowTextPopUpSearch from "../../helperComponent/ShowTextPopUpSearch";
import SidaNavOtherLists from '../../helperComponent/SidaNavOtherLists'
import ShowTextPopUp from "../../helperComponent/ShowTextPopUp";
const Layout = (props) => {
  const [friendReqNoti] = useState(props.friendReqNoti);
  const [randomReqNoti] = useState(props.randomReqNoti);
  const [isShown, setIsShown] = useState(false);
  const [isHover, setHover] = useState(true);
  const [isListShow, setShowList] = useState(false);
  const whiteRef=useRef();
  const [isShowWhiteScreen, setShowWhiteScreen] = useState(false);
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

  // let classNotification = [classes.navContainerListNavBtn];

  // if (props.friendReqNoti || !props.randomReqNoti) {
  //   classNotification = [classes.navContainerListNavBtn, classes.notiActive];
  // }

  const showSidebarHandler = () => {
    setShowSidebar(true);
  };
  // const closeSidebarHandler = () => {
  //   setShowSidebar(false);
  // };
  const LogoutHandler = () => {
    props.dologout(props.token);
  
    props.history.push('/');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  var timeOutClose = "";
  const onMouseHoverEnter = (value) => {
    timeOutClose = setTimeout(() => {
      setIsShown(value);
    }, 100);
  };

  const onMouseHoverLeave = (value) => {
    clearTimeout(timeOutClose);
    setTimeout(() => {
      setIsShown(value);
    }, 100);
  };
  const onClose = () => {
    console.log("onClick");
    setIsShown(!isShown);
    setHover(!isHover);
  };
  const showList = () => {
    setShowList(!isListShow);
  };
useEffect(()=>{
  document.body.addEventListener('click',(event)=>{
    console.log(event.target)
    if(event.target.className==='List_searchCollectionListNav__2bKO2'||event.target.className==='List_searchCollectionListNav__2bKO2 active')
    {
     setShowWhiteScreen(false);
     return;
    }
  
    if(whiteRef.current.contains(event.target))
    {
      return;
    }
  
    setShowWhiteScreen(false);
  })

},[])
const searchScreenHandler=()=>{
  setShowWhiteScreen(!isShowWhiteScreen);
}
  let shoSearchScreenStyle = [classes.dropShadow];
 
  if (isShowWhiteScreen) {
    shoSearchScreenStyle = [classes.dropShadow, classes.whiteScreenOpen];
  }

  let chageOtherBodyContain = [classes.otherBodyContain];
  let changeBoxSize = [classes.sideFoldableNav];
  let showCompany = [classes.companyName];
  let showOtherInfo = [classes.OtherInfoLists];
  let otherInfoUi = [classes.OtherInfoListUl];
  if (isShown) {
    otherInfoUi = [classes.OtherInfoListUl, classes.OtherInfoListsShow];
    showCompany = [classes.companyName, classes.OtherInfoListsShow];
    showOtherInfo = [classes.OtherInfoLists, classes.OtherInfoListsShow];
    changeBoxSize = [classes.sideFoldableNav, classes.sideFoldableNavBig];
  }
  return (
    <Aux>
      <div className={shoSearchScreenStyle.join(" ")}>
        <div ref={whiteRef} className={classes.whiteSideScreen}>
          <div className={classes.closeWhiteScreenBtn}>
            <button onClick={searchScreenHandler}><i className="fas fa-arrow-circle-left"></i></button>
          </div>
          <div className={classes.searchBarStyle}>
            <HEADER
              searchColl={props.searchColl}
              randomReqNoti={props.randomReqNoti}
              friendReqNoti={props.friendReqNoti}
              LogoutHandler={LogoutHandler}
              show={showSidebarHandler}
              isShow={showSidebar}
              // innerref={whiteRef}
            />
          </div>
        </div>
      </div>

      <div className={classes.upperMainContainer}>
        <div className={changeBoxSize.join(" ")}>
          <ul className={classes.navContainerLists}>
            <ShowTextPopUp
              icon="fas fa-home"
              navContainerListNavBtn={classes.navContainerListNavBtn}
              navContainerListBtn={classes.navContainerListBtn}
              link="/"
              text="Home"
            />
            <ShowTextPopUpSearch
              Home={classes.Home}
              icon="fas fa-search"
              navContainerListNavBtn={classes.navContainerListNavBtn}
              searchScreenHandler={searchScreenHandler}
              classLogout={classesLogOut.join(" ")}
              text="search"
            />

            <ShowTextPopUp
              icon="fas fa-bell"
              navContainerListNavBtn={classes.navContainerListNavBtn}
              navContainerListBtn={classes.navContainerListBtn}
              text="Notification"
              link="/notifications"
            />
            <ShowTextPopUp
              icon="fas fa-user"
              navContainerListNavBtn={classes.navContainerListNavBtn}
              navContainerListBtn={classes.navContainerListBtn}
              text="Profile"
              link="/profile"
            />

            <ShowTextPopUpLogout
              icon="fas fa-power-off"
              navContainerListNavBtn={classes.navContainerListNavBtn}
              LogoutHandler={LogoutHandler}
              classLogout={classesLogOut.join(" ")}
              text="Logout"
            />
          </ul>
          <div
            onMouseEnter={isHover ? () => onMouseHoverEnter(true) : null}
            onMouseLeave={isHover ? () => onMouseHoverLeave(false) : null}
            className={showOtherInfo.join(" ")}
          >
            <h1 className={showCompany.join(" ")}>QnA</h1>
            <SidaNavOtherLists otherInfoUi={otherInfoUi} showList={showList} SubjectHeading={classes.SubjectHeading} isListShow={isListShow} SubjectLists={classes.SubjectLists} subjects={props.subjects} SubjectList={classes.SubjectList} SubjectListNav={classes.SubjectListNav}/>

          </div>
          <button onClick={onClose} className={classes.bigBoxOpner}>
            {isShown ? (
              <i className="fas fa-angle-left"></i>
            ) : (
              <i className="fas fa-angle-right"></i>
            )}
          </button>
        </div>
        <div className={chageOtherBodyContain.join(" ")}>
          {/* <HEADER
            searchColl={props.searchColl}
            randomReqNoti={props.randomReqNoti}
            friendReqNoti={props.friendReqNoti}
            LogoutHandler={LogoutHandler}
            show={showSidebarHandler}
            isShow={showSidebar}
          /> */}

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
    subjects: state.auth.subjects,
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
