import React, { useContext, useState, createRef, useEffect } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import ConvApi from "../../../API/ConversationApi";
import MsgeApi from "../../../API/MessagesApi";


export default function ChatContent( {ConvObjj} ) {

  
  let {ConvId,ConvName,ConvImg ,RceverID}=ConvObjj;
  const CurentUser = JSON.parse(localStorage.getItem("user"));
  let msgTxt = createRef();
  let msgContainer = createRef();
  let [ConvMessages, setConvMessages] = useState([]);
  let socket = useContext(UserContext);


  window.onload=()=>{
      scrollToBottom()
    
  }
//enter press new message
  
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        console.log(msgTxt)
        if (msgTxt.current.value) {
            addMessage()
        }
      }
    });

   // let ConvId ="628874b0ed6c51f426d860f7";
  useEffect(() => {
    console.log(ConvId)
    if (ConvId)
      // 
      MsgeApi.GetConvMessages(ConvId).then(
        (msgs) => {
          setConvMessages(msgs)
        }
      )
  }, [ConvId])


   let scrollToBottom = () => {

    msgContainer.current.scrollIntoView({ behavior: "smooth" });
  };


  // on new message 
  socket.on("NewMsg",(msg)=>{
    console.log( "before add new ",ConvMessages)
    setConvMessages([...ConvMessages,msg])
   // scrollToBottom();
    })
   

  function addMessage(params) {
     console.log(msgContainer.current)
    let text = msgTxt.current.value;
    if (text) {

      let msg = {
        senderId: CurentUser._id,
        senderImg: CurentUser.img,
        text,
        convId: ConvId
      }
      MsgeApi.AddMessage(msg);
      msgTxt.current.value = "";

      //invock addmsg
      //let receverId = RceverID
      socket.emit("addMsg", RceverID, msg);


      setConvMessages([...ConvMessages,msg])
      scrollToBottom()
    }
  }

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image={ConvImg}
            />
            <p className="text-light">{ConvName? ConvName : "cc"}</p>
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
        <div className="chat__items" >
          {ConvMessages.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={index}
                user={itm.senderId == CurentUser._id ? "me" : "other"}
                msg={itm.text}
                image={itm.senderImg}
              />
            );
          })
       
          }
          
        </div>
        
          <div ref={msgContainer}   style={{height:80}}> </div>
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