


import List from '@mui/material/List';
import './style.css'
import FriendItem from './FriendListItem';
import UserAPI from '../../API/UserApi'
import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../Context/UserContextProvider';
export default function FriendsList() {
  let [users, setUsers] = useState([]);
  let [TempFriends, setTempFriends] = useState([]);
  let [isFriendsBtnExpanded, setIsFriendsBtnExpanded] = useState(false);
  let socket = useContext(UserContext);
  let ch = false;
//  socket.on("SC", (userId) =>{
  

//    for (let  u in users){
//      if(u._id===userId){
//        u.isOnline=true;
//        ch= true;
//      }
//     }
//     if(ch){
//       console.log("some one connectes ",users);
//       setUsers([...users])

//     }
   
//  }) 
  useEffect(() => {
    (async () => {
      const CurentUser = JSON.parse(localStorage.getItem("user"));
      let option = {
        isFriend: true,
        UserId: CurentUser._id
      }
      users = await UserAPI.getUsersByOPtions(option)
      TempFriends = [...users];
      setUsers(users.slice(0, 3));

    })();
  }, [])

  function ClikeHandler() {
    // if (isFriendsBtnExpanded) {
    //   setUsers(users.slice(0, 2));
    //   setIsFriendsBtnExpanded(false);
    // }
    // else {

    //   setUsers([...TempFriends])
    //   setIsFriendsBtnExpanded(true);

    // }

  }

  return (

    <div className='rounded-3 FrindListHolder  '>
      <h3 >Friends </h3>
      {
        users.length == 0 ? <h2>you are alone</h2> :
          <List sx={{ width: '90%', margin: 'auto', bgcolor: 'hsl(252deg 8% 12%)' }}>

            {
              users.map((i, index) => {
                return (
                  <React.Fragment key={index}>
                    <FriendItem user={i} ></FriendItem>)
                  </React.Fragment>)
              })
            }
          </List>
      }


      <button type="button" className="btn btn-primary mt-3 w-100" onClick={ClikeHandler}>{isFriendsBtnExpanded ? 'Show less' : 'Show more'} </button>
    </div>


  );
}
