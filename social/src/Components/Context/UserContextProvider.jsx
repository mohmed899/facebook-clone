import { Children, createContext, useReducer, useState } from "react"
import UserRducer from './UserReducer'
import { io } from "socket.io-client";

export const UserContext = createContext();

export  const UserContxetProvider = ({children})=>{
    let [intiState,setUser]=useState({
        user:null,
        
    })
    
    let socket = io('http://localhost:4000/')
  //const CurentUser = JSON.parse(localStorage.getItem("user"));
    //socket.on("connect", () => { console.log("connected")})
       //   const[state,dispatch] = useReducer(UserRducer,intiState);
    return(
        <UserContext.Provider value={socket}>
            {children}
        </UserContext.Provider>
    )
}
 