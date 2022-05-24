import VideoItem from "./VideoItem"
import React from "react";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
export default function WatchHolder(params) {

    let vedios = [
        '../assets/v1.mp4',
      '../assets/v2.mp4',
      '../assets/v3.mp4',
      '../assets/v4.mp4',
      '../assets/v5.mp4',
      '../assets/v6.mp4',
      '../assets/v7.mp4',

    ]
    return (
        <div>
            {
                vedios.map((videoLink, i) => {
                    return (
                        <React.Fragment key={i}>
                            <h4> some title</h4>
                            <Player src={videoLink} />
                        </React.Fragment>
                    )
                })
            }
         
        </div>
    )
}