import { NavLink } from "react-router-dom";
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './style.css'
import { Avatar } from "@mui/material";
export default function RightNavBar() {
const curentUser = JSON.parse( localStorage.getItem('user'))
    return (
        <div className="NavIconHolder d-flex align-items-center">


            <NavLink to='./post' style={({ isActive }) => isActive ? { color: '#166ae7e8' } : undefined} className='unActive ' >
                <Badge badgeContent={4} color='primary' >
                    <NotificationsIcon sx={{ color: 'white' }} />
                </Badge>
            </NavLink>
            <NavLink to='./post' style={({ isActive }) => isActive ? { color: '#166ae7e8' } : undefined} className='unActive ' >
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