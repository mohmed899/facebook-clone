import React, { useEffect, useState } from 'react'
import UserApi from '../../API/UserApi'
import ProfileCard from './ProfileCard'
export default function PeopleHolder(params) {
    let [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {
            console.log("people")
            const CurentUser = JSON.parse(localStorage.getItem("user"));
            const users = await UserApi.getUsersByOPtions({ isFriend: false,  UserId:CurentUser._id });
            setUsers(users)
          //  console.log(users)
        })()
    }, [])

    return (
        <div className='d-flex flex-wrap'>
            {
                users.map((u,i) => {
                    return (
                        <React.Fragment key={i}>
                            <ProfileCard user={u}></ProfileCard>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}