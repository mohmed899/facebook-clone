import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

export default function Conversation({ conversation, currentUser }) {
  
  return (
    <div className="conversation">
       <img
        className="conversationImg"
        src={
          "https://i.imgur.com/Ac9iszO.png"
        }
        alt=""
      />
      <span className="conversationName">{"user?.username"}</span> 
    </div>
  );
}