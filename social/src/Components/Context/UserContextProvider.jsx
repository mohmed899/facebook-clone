import { Children, createContext, useReducer, useState } from "react"
import UserRducer from './UserReducer'



export const UserContext = createContext();

export  const UserContxetProvider = ({children})=>{
    let [intiState,setUser]=useState({
        user:null,
        
    })
    
       //   const[state,dispatch] = useReducer(UserRducer,intiState);
    return(
        <UserContext.Provider value={{user:intiState.user, dispatch:setUser}}>
            {children}
        </UserContext.Provider>
    )
}
 