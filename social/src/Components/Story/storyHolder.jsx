import React from 'react'
import './story.css'
import StoryCard from './StoryCard'
export default function StoryHolder(params) {
    let stories = [1,2,3,4]
    return (
        <div className="middle-panel">
        <div className="story-section">

            <div className="story create">
                <div className="dp-image">
                    <img src="https://aashishpanthi.me/mediabook/images/dp.jpg" alt="Profile pic"/>
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
                            <StoryCard></StoryCard>
                        </React.Fragment>
                    )
                   })
               }

        
        </div>
        
        </div>
    )
}