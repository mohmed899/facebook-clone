import {  Avatar } from '@mui/material'

export default function SearchItem({user}){

    return (
        
        <div className="d-flex flex-wrap p-2">
           <Avatar alt="Remy Sharp" src={user.img}/>
           <h4 className='offset-1'> user Name</h4>
        </div>
    )
}