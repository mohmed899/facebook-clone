import './story.css'
export default function StoryCard({userImg,storyImg,ownerName}) {
  let  story={
        userImg,
        storyImg,
        ownerName
    }
    return (
        <div className="story">
            <img src={story.storyImg}alt="Anuska's story" />
            <div className="dp-container">
                <img src={story.userImg} alt="" />
            </div>
            <p className="name">{story.ownerName}</p>
        </div>
    )
}