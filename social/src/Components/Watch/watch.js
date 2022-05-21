import VideoItem from "./VideoItem"
import React from "react";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
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
            <Player src="blob:https://www.pinterest.com/33c41754-598c-40a9-9b12-5d7004162b6f" />
        </div>
    )
}