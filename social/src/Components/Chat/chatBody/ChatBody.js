import React, { Component, useState, useEffect } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import SearchBar from "../../search/search";
import NavMainPage from "../../TablerMainPage/TablerMain";
import RightNavBar from "../../TablerMainPage/rightNavBar";
import ConversationApi from "../../../API/ConversationApi";


export default function ChatBody(params) {
  
  //get the last convesation of curent user 
  const CurentUser = JSON.parse(localStorage.getItem("user"));
  let temp=[];
  let [ ConversationInfo , SetConversationInfo ] = useState({allChatUsers:[],ConvId:"",OtherUserId:""})
  useEffect(() => {
    ConversationApi.GetUserConversaion(CurentUser._id).then(
      (Concersations)=>{
       // setallChatUsers(Concersations);
        let ConvId = Concersations[0]._id;
        let OtherUserId = Concersations[0].OtherID
      
       
        SetConversationInfo({allChatUsers:Concersations,ConvId,OtherUserId })
      }
    )
}, [])


   function setConversation(ConvId, OtherUserId ) {
    console.log("allChatUsers",temp)
    
    SetConversationInfo({allChatUsers:ConversationInfo.allChatUsers,ConvId,OtherUserId })
   }
  return (
    <div>

      {/* <div className="d-flex flex-wrap mainNav">
        <div className="col-4 position-relative "><SearchBar /></div>
        <div className="col-4"><NavMainPage /></div>
        <div className="col-4"><RightNavBar /></div>
      </div> */}

      <div className="main__chatbody">
   
        <ChatList allChatUsers ={ConversationInfo.allChatUsers }  SetConvId ={setConversation}/>
        <ChatContent ConvId={ConversationInfo.ConvId} />
        <UserProfile OtherUserId={ConversationInfo.OtherUserId} />
      </div>
    </div>

  );
}