import { NavLink } from "react-router-dom";
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './style.css'
import { Avatar } from "@mui/material";
import { UserContext } from "../Context/UserContextProvider";
import React, { useContext, useEffect, useState } from 'react';
export default function RightNavBar() {
    const curentUser = JSON.parse(localStorage.getItem('user'))

    let socket = useContext(UserContext);
    let [notification, setNotification] = useState([]);

    socket.on("getNoto", (Noto, name) => {
        setNotification([...notification, { img: Noto, Name: name }])

        console.log(Noto)
    })

    const notoListItem = (name, img) => {
        return (
            <div className="d-flex flex-wrap justify-content-evenly align-items-center p-1">
                <Avatar alt={name} src={img} />
                <span className="notoText">{`${name} Liked your Post`}</span>
            </div>
        )
    }
    const [o, seto] = React.useState(false);


    const handleClick = (event) => {

        seto(true);
    };
    const handleClose = () => {
        seto(false)
    };
    return (
        <div className="NavIconHolder d-flex align-items-center position-relative">


            <NavLink to='./post' style={({ isActive }) => isActive ? { color: '#166ae7e8' } : undefined} className='unActive ' >
            </NavLink>

            <div onClick={handleClick}>
                <Badge badgeContent={notification.length} color='primary' sx={{ paddingLeft: 0 }}  >
                    <NotificationsIcon sx={{ color: 'white' }} />
                </Badge>
            </div>

{
            o?
            <div  className="notoList" onMouseLeave={handleClose}>
                {
                    notification.map((i) => {
                        return notoListItem(i.Name, i.img)
                    })
                }
            </div>:null
}

            <NavLink to='/chat' style={({ isActive }) => isActive ? { color: '#166ae7e8' } : undefined} className='unActive ' >
                <Badge badgeContent={0} color='primary' >
                    <ChatIcon sx={{ color: 'white' }} />
                </Badge>
            </NavLink>
            <NavLink to={`/profile/${curentUser._id}`} style={({ isActive }) => isActive ? { color: '#166ae7e8' } : undefined} className='unActive ' >
                <Avatar alt={curentUser.fName} src={curentUser.img} />
            </NavLink>



        </div>
    )
}