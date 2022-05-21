import React, { Component, useState, useEffect } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import SearchBar from "../../search/search";
import NavMainPage from "../../TablerMainPage/TablerMain";
import RightNavBar from "../../TablerMainPage/rightNavBar";
import ConversationApi from "../../../API/ConversationApi";

import UserApi from "../../../API/UserApi";
export default function ChatBody(params) {

  //get the last convesation of curent user 
  const CurentUser = JSON.parse(localStorage.getItem("user"));
  let temp = [];
  let [ConversationInfo, SetConversationInfo] = useState({ allChatUsers: [], ConvObj: {}, OtherUserId: "" })
  useEffect(() => {
    ConversationApi.GetUserConversaion(CurentUser._id).then(
      (Concersations) => {

        if (Concersations.length != 0) {
          let ConvId = Concersations[0]._id;
          let OtherUserId = Concersations[0].Members[0] == CurentUser._id ? Concersations[0].Members[1] : Concersations[0].Members[0];
          UserApi.getUserById(OtherUserId).then(
            (u) => {

              SetConversationInfo({ allChatUsers: Concersations,
                 ConvObj: { ConvId, ConvName: u.fName + '' + u.lName, ConvImg: u.img , RceverID: OtherUserId}, OtherUserId })
            }
          )
        }
      }
    )
  }, [])


  function setConversation(SelectedConvObj, OtherUserId) {

    let { ConvId, ConvName, ConvImg } = SelectedConvObj;

    SetConversationInfo(
      {
        allChatUsers: ConversationInfo.allChatUsers,
        ConvObj: { ConvId, ConvName, ConvImg },
        OtherUserId
      })
  }
  return (
    <div>

       <div className="d-flex flex-wrap mainNav">
        <div className="col-4 position-relative "><SearchBar /></div>
        <div className="col-4"><NavMainPage /></div>
        <div className="col-4"><RightNavBar /></div>
      </div> 

      <div className="main__chatbody ">

          <div className="d-none d-lg-block ">
            <ChatList allChatUsers={ConversationInfo.allChatUsers} SetConvId={setConversation} />
          </div>
          <div className="">

          </div>
            <ChatContent  ConvObjj={ConversationInfo.ConvObj} />
          <div className="d-none d-lg-block ">
            <UserProfile OtherUserId={ConversationInfo.OtherUserId} />
          </div >
      </div>
    </div>

  );
}