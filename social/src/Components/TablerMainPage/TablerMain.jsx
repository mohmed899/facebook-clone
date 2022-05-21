import { NavLink } from "react-router-dom";
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import './style.css'
export default function NavMainPage() {

    return (
        <div className="NavIconHolder">

            <NavLink to='   post' style={({ isActive }) => isActive ? { color: '#166ae7e8' } : undefined} className='unActive ' > <HomeTwoToneIcon sx={{ fontSize: 35 }} /> </NavLink>
            <NavLink to='watch' style={({ isActive }) => isActive ? { color: '#166ae7e8' } : undefined} className='unActive'>  <OndemandVideoOutlinedIcon sx={{ fontSize: 35 }} />  </NavLink>
            <NavLink to='people' style={({ isActive }) => isActive ? { color: '#166ae7e8' } : undefined} className='unActive '>  <PeopleOutlineOutlinedIcon sx={{ fontSize: 35 }} />  </NavLink>
            <NavLink to='store' style={({ isActive }) => isActive ? { color: '#166ae7e8' } : undefined} className='unActive '>  <StoreOutlinedIcon sx={{ fontSize: 35 }} />  </NavLink>
            {/* <NavLink to='post' style={({ isActive }) => isActive ? { color: '#166ae7e8' } : undefined} className='unActive' > <HomeTwoToneIcon sx={{ fontSize: 35 }} /> </NavLink> */}

        </div>
    )
}