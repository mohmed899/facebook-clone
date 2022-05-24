import React, { useContext, useEffect, useState } from 'react';

import PostApi from '../../API/postApi'
import { UserContext } from '../Context/UserContextProvider';
import StoryHolder from '../Story/storyHolder';
import CreatePost from './CreatePost';
import CreatePostWithStory from './CreaatePostWithStory';
import PostsHolder from './postsHolder';
export default function HomeFeed(params) {

    console.log("post render");
    let [posts, setPosts] = useState([]);
    const { user } = useContext(UserContext)
    //componentDidMount 
    useEffect(() => {
      
        PostApi.GetAllPosts().then(
            (posts) => {
                console.log(posts)
                setPosts(posts)
            },
            (e) => {
                console.log(e);
            }
        )

    }, [])
    return(
        <>
        <StoryHolder/>
        <CreatePost/>
        <PostsHolder posts={posts}></PostsHolder>
        </>
    )
    
}