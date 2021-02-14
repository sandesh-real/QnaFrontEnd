import React,{useEffect,useState} from 'react';
import NotificationBox from './Notificationbox/Notificationbox'
import classes from './RandomNotification.module.css';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import Aux from '../../../hoc/Auxilary/Auxilary';
const RandomNotification=(props)=>{
   
    const [randomNotiColls]=useState(props.randomNotiColl);
    useEffect(()=>{
        
        props.onMakeFalseRandom(props.token);
    },[props])
    return( 
        <Aux>{randomNotiColls!==null?
        <Aux>
        {randomNotiColls[0]!==null?
        <div className={classes.NotificationList}>
         {props.randomNotiColl.map((noti)=>{
            return <NotificationBox key={noti._id} message={noti.notification_type}/>
         })}
    </div>
    :null}
    </Aux>:null}

    </Aux>
    )
}

const mapStateToProps=(state)=>{
    return{
        token:state.auth.token,
        randomNotiColl:state.notification.randomNotiColl
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onMakeFalseRandom:(token)=>dispatch(actions.randomNotiMakeFalse(token))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(RandomNotification);