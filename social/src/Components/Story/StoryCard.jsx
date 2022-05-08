import './story.css'
export default function StoryCard({storyd}) {
  let  story={
        userImg:'https://aashishpanthi.me/mediabook/images/model.jpg',
        storyImg:'https://aashishpanthi.me/mediabook/images/model.jpg',
        ownerName:"mohamed khaled"
    }
    return (
        <div class="story">
            <img src={story.userImg}alt="Anuska's story" />
            <div class="dp-container">
                <img src={story.storyImg} alt="" />
            </div>
            <p class="name">{story.ownerName}</p>
        </div>
    )
}