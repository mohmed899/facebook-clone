import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import ConvApi from "../../../API/ConversationApi";
import MsgeApi from "../../../API/MessagesApi";

// export default class ChatContent extends Component {
//   messagesEndRef = createRef(null);
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       chat: this.chatItms,
//       msg: "",
//     };
//   }

//   scrollToBottom = () => {
//     this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   componentDidMount() {
//     window.addEventListener("keydown", (e) => {
//       if (e.keyCode == 13) {
//         if (this.state.msg != "") {
//           this.chatItms.push({
//             key: 1,
//             type: "",
//             msg: this.state.msg,
//             image:
//               "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
//           });
//           this.setState({ chat: [...this.chatItms] });
//           this.scrollToBottom();
//           this.setState({ msg: "" });
//         }
//       }
//     });
//     this.scrollToBottom();
//   }
//   onStateChange = (e) => {
//     this.setState({ msg: e.target.value });
//   };

 
// }

export default function ChatContent({ConvId}){
  console.log(ConvId)
  const CurentUser = JSON.parse(localStorage.getItem("user"));

  let  msgTxt = React.createRef(); 
  let  msgContainer = React.createRef();
let [ConvObj,setConvObj]= useState({convData:{},msgs:[]});
  useEffect(()=>{
    console.log(ConvId)
    if(ConvId)
         ConvApi.GetConversaionById(ConvId).then(
           (convData)=>{
             console.log(convData)
            MsgeApi.GetConvMessages(ConvId).then(
              (msgs)=>{
                setConvObj({convData,msgs})
              }
            )
           }
         )
  },[ConvId])
  
 let chatItms = [
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  function addMessage(params) {
   // console.log(msgTxt.current.value)
    let text = msgTxt.current.value;
    if(text){

      let msg = {
        senderId:CurentUser._id,
        senderImg:CurentUser.img,
        text,
        convId:ConvId
      }
      MsgeApi.AddMessage(msg);
      msgTxt.current.value="";
    }
  }
 
  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image={ConvObj.convData.img}
            />
            <p>{ConvObj.convData.ConvName?ConvObj.convData.ConvName:"cc"}</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items" ref={msgContainer}>
          {ConvObj.msgs.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={index}
                user={itm.senderId==CurentUser._id ?"me":"other"}
                msg={itm.text}
                image={itm.senderImg}
              />
            );
          })}
          {/* <div ref={this.messagesEndRef} /> */}
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            // onChange={this.onStateChange}
            // value={this.state.msg}
            ref={msgTxt}
          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={addMessage}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
} 