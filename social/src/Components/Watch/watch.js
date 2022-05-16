import VideoItem from "./VideoItem"
import React from "react";
export default function WatchHolder(params) {

    let vedios = [
        'https://youtu.be/WCZiF22hfdU',
        'https://youtu.be/PZ7lDrwYdZc',
        'https://youtu.be/5MgBikgcWnY',
        'https://youtu.be/TVFu4-Kd4oM',
        'https://youtu.be/MgnlbDVuPdg'
    ]
    return (
        <div>
            {/* {
                vedios.map((videoLink,i) => {
                    return (
                        <React.Fragment key={i}>
                            <VideoItem link={videoLink}></VideoItem>
                        </React.Fragment>
                    )
                })
            } */}

            <h4> some title</h4>
            <video width="750" height="500" controls>
                <source src={'https://www.youtube.com/watch?v=PZ7lDrwYdZc&feature=youtu.be'} type="video/mp4" />
            </video>
        </div>
    )
}