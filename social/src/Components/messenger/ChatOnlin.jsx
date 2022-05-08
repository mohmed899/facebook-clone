import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

export default function ChatOnline() {
 let onlineFriends=[8,8,8];
 function handleClick(params) {
   
 }
  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                "https://i.imgur.com/ZTh6LBh.jpeg"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{"o?.username"}</span>
        </div>
      ))}
    </div>
  );
}