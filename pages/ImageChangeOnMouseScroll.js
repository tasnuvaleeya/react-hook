import React from "react";

import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnMouseScroll = () =>{
    return (
        <div>
            {[2, 3, 4].map(speakerId => {
                return (
                    <div key={speakerId}>
                        <ImageToggleOnScroll
                            primaryImg={`/static/speaker/bw/sp${speakerId}.jpeg`}
                            secondaryImg={`/static/speaker/clr${speakerId}.jpeg`}
                        />
                            </div>
                )
            })}
        </div>
    );
};

export default ImageChangeOnMouseScroll;