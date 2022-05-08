import React, { useContext, useEffect, useState } from 'react';
import './profileStyle.css'
import NavMainPage from '../TablerMainPage/TablerMain';
import ProfileHeader from './ProfileHeader';
import ProfileFriendList from './profileFriendList';
import CreatePost from "../PostsPage/CreatePost";
import PostsHolder from '../PostsPage/postsHolder';
import PostApi from '../../API/postApi'
import UserApi from "../../API/UserApi";
import { Link, useParams } from 'react-router-dom';
import NoPosts from '../Error/NoPostYet';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
function Profile() {

    let [posts, setPosts] = useState([]);
    let [friends, setFriends] = useState([]);
    let [user, setUser] = useState('');
    let { id } = useParams();
    const CurentUser = JSON.parse(localStorage.getItem("user"));
    console.log(id);
    console.log(CurentUser);

    useEffect(() => {
        console.log("post effect ")
        PostApi.getUserPosts(id).then(
            (posts) => {
                console.log(posts)
                setPosts(posts)
            },
            (e) => {
                console.log(e);
            }
        )
        UserApi.getUserById(id).then(
            (user) => {
                setUser(user);
            },
            () => { }
        )

        UserApi.getUsersByOPtions({ isFriend: true, UserId: id }).then(
            (data) => { setFriends(data) },
            (error) => { alert(error) }
        )


    }, [])
    return (
        <>

            <div className='container '>
                <div className='col-12'>
                    <div className='profileCover rounded-2 overflow-hidden' style={{ background: `url(${user.coverImg})` }}>
                        <img src={user.img} className='coverImg rounded-circle' />
                        <Link to={`/Home/post`}>
                        <HomeTwoToneIcon/>
                        </Link>
                    </div>
                    <div className='componentBg text-center p-1 rounded-2'>
                        <h3>{user.fName + ' ' + user.lName}</h3>
                        <h5>{user.job}</h5>
                    </div>

                </div>

                <div className='d-flex flex-wrap '>
                    <div className='col-4  p-2' >
                        <ProfileFriendList friends={friends} />
                    </div>
                    <div className='col-8 '>
                        <div className='w-75 m-auto'>
                            {
                                id === CurentUser._id ? <CreatePost /> : null
                            }
                            <PostsHolder posts={posts}></PostsHolder>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile