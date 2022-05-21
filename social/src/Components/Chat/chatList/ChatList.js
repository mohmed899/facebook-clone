import React, { Component, useEffect, useState } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";


export default function ChatList({allChatUsers,SetConvId}) {
 
  const CurentUser = JSON.parse(localStorage.getItem("user"));
  console.log(allChatUsers);
  return (
    <div className="main__chatlist">

      <div className="chatlist__heading">
        <h2 className="text-light">Chats </h2>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input type="text" placeholder="Search Here" required />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="chatlist__items">
        {allChatUsers.map((item, index) => {
          return (

            
    
            <ChatListItems
              SetConvFun={SetConvId}
              OtherID={item.Members[0]==CurentUser._id?item.Members[1]:item.Members[0]}
              ConvId={item._id}
              key={index}
              animationDelay={index + 1}
              active={"active"}
              isOnline={"active" }
            
            />
          );
        })}
      </div>
    </div>
  );
}