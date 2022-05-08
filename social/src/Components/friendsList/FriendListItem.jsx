import './style.css'
//name email status 
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function FriendItem({user}) {
    //let { user } = userp
    return (
        <ListItem sx={{animation:'myAnim 1s linear 1s 1 normal none'}}>
            <ListItemAvatar>

                <Avatar alt="Remy Sharp" src={user.img}/>

            </ListItemAvatar>
            <ListItemText sx={{  bgcolor: 'hsl(252deg 8% 12%)' }} 
             primary={user.fName +' '+user.lName}

              secondaryTypographyProps={{
                    color: 'hsl(252deg 2% 51%)',
                    fontWeight: 'medium',

                }}
                primaryTypographyProps={{
                    color: 'white',
                    fontWeight: 600,
                    

                }} />
                <FiberManualRecordIcon sx={{ fontSize: 17 ,color: user.status=='active'? "green" :'gray' }}   />
        </ListItem>

    )
}

export default FriendItem