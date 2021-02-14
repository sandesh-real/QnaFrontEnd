import React,{useEffect} from 'react';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Notification from './containers/NotificationHandler/NotificationHandler';
import {connect} from 'react-redux';
import {Route,Switch,withRouter,useLocation } from 'react-router-dom';
import Profile from './containers/ProfileHandler/ProfileHandler';
// import * as actions from './store/actions/Question';
import ViewedAnswer from './containers/ViewedAnswerHandler/ViewedAnswerHandler';
import Authentication from './containers/Authentication/Authentication';
import Division from './containers/DivisionHandler/DivisionHandler';
import Moresearch from './containers/MoresearchHandler/MoresearchHandler';
import UserProfile from './containers/UserProfileHandler/UserProfileHandler'
import Aux from './hoc/Auxilary/Auxilary';
import SubjectQuestion from './containers/SubjectQuestion/SubjectQuestionHandler';

//importing for admin
import AdminPanel from './containers/AdminPanel/adminLogin';
import Dashboard from './containers/AdminPanel/Dashboard';

import * as actions from './store/actions/index'
import './App.css';

function App(props) {
  
  const location=useLocation();
  useEffect(()=>{
    props.onTryAutoSignup()
  },[props])
let route1=null;
let route2=null;

if(props.token && props.allDone){
  if(location.pathname.includes('/admin')){
    route2=(
      <Switch>
    
    <Route path="/admin-panel" exact  render={(props)=><AdminPanel {...props}/>}/>
      <Route path="/admin-dashboard" render={(props)=><Dashboard {...props}/>}/>
      {/* <Route path="/profile" render={(props)=><Profile {...props}/>}/>
      <Route path="/viewedanswer/:id" render={(props)=><ViewedAnswer {...props}/>}/>
      <Route path="/moresearch/:id" render={(props)=><Moresearch {...props}/>}/>
      <Route path="/subjectquestion/:id" render={(props)=><SubjectQuestion {...props}/>}/> */}
  
      </Switch>
    ) 
  }
  else{

  
  route1=(<Layout {...props}> <Switch>
    
    <Route path="/" exact render={(props)=><Home {...props}/>}/>
    <Route path="/notifications" render={(props)=><Notification {...props}/>}/>
    <Route path="/profile" render={(props)=><Profile {...props}/>}/>
    <Route path="/viewedanswer/:id" render={(props)=><ViewedAnswer {...props}/>}/>
    <Route path="/moresearch/:id" render={(props)=><Moresearch {...props}/>}/>
    <Route path="/subjectquestion/:id" render={(props)=><SubjectQuestion {...props}/>}/>

    </Switch> </Layout>)
  }
}
else{
  if(location.pathname.includes('/admin')){
    route2=(
      <Switch>
    
    <Route path="/admin-panel" exact  render={(props)=><AdminPanel {...props}/>}/>
      <Route path="/admin-dashboard" render={(props)=><Dashboard {...props}/>}/>
      {/* <Route path="/profile" render={(props)=><Profile {...props}/>}/>
      <Route path="/viewedanswer/:id" render={(props)=><ViewedAnswer {...props}/>}/>
      <Route path="/moresearch/:id" render={(props)=><Moresearch {...props}/>}/>
      <Route path="/subjectquestion/:id" render={(props)=><SubjectQuestion {...props}/>}/> */}
  
      </Switch>
    ) 
  }
  else{

  
  route2=(<Switch>
  <Route path="/" exact render={(props)=><Authentication {...props}/>}/>
  {/* <Route path="/division" component={Division}/> */}
  <Route path="/division" render={(props)=><Division {...props}/>}/>
  <Route path="/userprofile" component={UserProfile}/>

  </Switch> )
  }
}
  return ( 
    <Aux>

    {route2}

    <div>
  
    {route1}
  
  </div>
  </Aux>
  );
}

const mapStateToProps=(state)=>{
  return{
    token:state.auth.token,
    allDone:state.auth.allDone
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{

    onTryAutoSignup:()=>dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
