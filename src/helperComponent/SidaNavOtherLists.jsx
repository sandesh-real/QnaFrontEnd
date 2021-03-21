import React from 'react';
import { NavLink } from "react-router-dom";

const SidaNavOtherLists=(props)=>{
    return (
  
   
    <div className={props.otherInfoUi.join(" ")}>
      <h4 onClick={props.showList} className={props.SubjectHeading}>
        <i
          style={{ fontSize: "1.8rem", marginRight: "10px" }}
          className="fas fa-book-open"
        ></i>
        <span>Seventh Sem</span>{" "}
        {props.isListShow ? (
          <i
            className="fas fa-angle-right"
            style={{ fontSize: "1.8rem", marginLeft: "10px" }}
          ></i>
        ) : (
          <i
            className="fas fa-angle-down"
            style={{ fontSize: "1.8rem", marginLeft: "8px" }}
          ></i>
        )}
      </h4>
      {props.isListShow ? (
        <ul className={props.SubjectLists}>
          {props.subjects.map((subject) => {
            return (
              <li key={subject._id} className={props.SubjectList}>
                <NavLink
                  to={{ pathname: `/subjectquestion/${subject._id}` }}
                  className={props.SubjectListNav}
                >
                  {subject.subjectname}
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
)
}
export default SidaNavOtherLists;