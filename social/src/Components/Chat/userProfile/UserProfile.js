import React, { Component ,useEffect, useState} from "react";
import "./userProfile.css";
import UserApi from "../../../API/UserApi";
export default function UserProfile({OtherUserId})  {

  let [user,setUser]=useState({})
  useEffect(() => {
    (async () => {
       
        const user = await UserApi.getUserById(OtherUserId);
        console.log( "user form profile", user);
        if(user)
        setUser(user);
   
    })()
}, [OtherUserId])
 function toggleInfo  (e) {
    e.target.parentNode.classList.toggle("open");
  };

  console.log(OtherUserId);
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={user.img} />
          </div>
          <h4>{user.fName+' '+ user.lName}</h4>
          <p>{user.job?user.job:""}</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  
}


