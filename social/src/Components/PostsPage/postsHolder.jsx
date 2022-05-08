import Post from './posts';
import React from 'react';
import NoPosts from '../Error/NoPostYet';
export default function PostsHolder({ posts }) {
    return (
        <>

            
                {
                    posts.length === 0?<NoPosts/>:   posts.map((p, i, arry) => {
                        return (
                            <React.Fragment key={i} >
                                <Post post={p}></Post>
                            </React.Fragment>
                        )
                    })
                }
               
            
        </>
    )
}