import ProfileFriendItem from "./profileFriendItem"

export default function ProfileFriendList({ friends }) {

    return (
        <>
            <div className="mt-3 rounded-1 " style={{background:'hsl(252deg 8% 12%)'}}>
                <div className="m-3">
                    <h3 className="m-0 "> Friends </h3>
                    <p className="m-0 text-light"> {`${friends.length} Friend`}</p>
                </div>

                <div className="d-flex flex-wrap justify-content-center">
                    {
                        friends.length !== 0 ? friends.map((i) => {
                            return (<ProfileFriendItem user={i} />)
                        }) : <p> You are alone </p> 
                    }
                </div>
            </div>
        </>)

}