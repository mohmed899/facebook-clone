
export default function ProfileFriendItem({user}) {
    return (
        <>
        <div style={{width:'30%'}}>
            <div style={{width:100,height:100 ,margin:'auto'  }}>
                 <img src={user.img||'https://www.w3schools.com/howto/img_avatar.png'} style={{width:'100%',height:'100%',borderRadius:5}} />
            </div>
            <p style={{textAlign:'center',color:'white',fontSize:'large'}}>{user.fName}</p>
        </div>
        </>)

    }