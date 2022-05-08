import './story.css'
import StoryCard from './StoryCard'
export default function StoryHolder(params) {
    let stories = [1,2,3,4]
    return (
        <div class="middle-panel">
        <div class="story-section">

            <div class="story create">
                <div class="dp-image">
                    <img src="https://aashishpanthi.me/mediabook/images/dp.jpg" alt="Profile pic"/>
                </div>
                <span class="dp-container">
                    <i class="fa fa-plus"></i>
                </span>
                <span class="name">Create Story</span>
            </div>
               {
                   stories.map((i)=>{
                    return( <StoryCard></StoryCard>)
                   })
               }

        
        </div>
        
        </div>
    )
}