import React from 'react'
import './story.css'
import StoryCard from './StoryCard'
export default function StoryHolder(params) {
    let stories = [

        {
            userImg:"https://aashishpanthi.me/mediabook/images/model.jpg",
            storyImg:"https://i.pinimg.com/236x/60/23/ac/6023acd20085bb8302f86aaa1e81d971.jpg",
            ownerName:"Jhon doe"
        },
        {
            userImg:"https://i.pinimg.com/564x/c4/f7/9d/c4f79d4db7c46df213bc446a8e63e04f.jpg",
            storyImg:"https://i.pinimg.com/564x/31/19/3d/31193d940a0ab160ba357ee0f3e4fef6.jpg",
            ownerName:"Mena "
        },
        {
            userImg:"https://i.pinimg.com/564x/8c/b5/ee/8cb5ee0a8fc8dd21497f0c2d0ebe1238.jpg",
            storyImg:"https://i.pinimg.com/564x/8e/2b/97/8e2b97002b6f2fad4cf6afa20faaf7fb.jpg",
            ownerName:"Aisha"
        },
        {
            userImg:"https://i.pinimg.com/564x/f6/64/91/f66491045a5d9a1168bf014486f1917a.jpg",
            storyImg:"https://i.pinimg.com/564x/47/74/72/4774728ba93cb5b30880ce333ac1635e.jpg",
            ownerName:"Jhon doe"
        }
    ]
    return (
        <div className="middle-panel">
        <div className="story-section">

            <div className="story create">
                <div className="dp-image">
                    <img src="../assets/657.PNG" alt="Profile pic"/>
                </div>
                <span className="dp-container">
                    <i className="fa fa-plus"></i>
                </span>
                <span className="name">Create Story</span>
            </div>
               {
                   stories.map((i)=>{
                    return( 
                        <React.Fragment key={i}>
                            <StoryCard ownerName={i.ownerName} storyImg={i.storyImg} userImg={i.userImg}></StoryCard>
                        </React.Fragment>
                    )
                   })
               }

        
        </div>
        
        </div>
    )
}