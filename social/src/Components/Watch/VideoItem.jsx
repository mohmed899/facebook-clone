import React from "react";

export default function VideoItem({ link }) {
    return (
        <React.Fragment >
            <h4> some title</h4>
            <video width="750" height="500" controls>
                <source src={link} type="video/mp4"  />
            </video>
        </React.Fragment>
    )
}