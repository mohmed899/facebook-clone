import {  Avatar } from '@mui/material'
import { Link } from "react-router-dom";
export default function SearchItem({user}){

    return (
        <Link to={`/profile/${user._id}`} style={{textDecoration: "none"}}>
        <div className="d-flex flex-wrap p-2 align-items-center">
           <Avatar alt={user.fName} src={user.img}/>
           <h6 className='offset-1 text-light'> {`${user.fName} ${user.lName}`}</h6>
        </div>
        </Link>
    )
}