import React from "react";

import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseHover = () =>{
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/speaker/bw/Speaker1.jpeg"
                                    secondaryImg="/static/speaker/clr3.jpeg"
                                    alt="logo"/>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/speaker/bw/sp2.jpeg"
                                    secondaryImg="/static/speaker/clr5.png"
                                    alt="logo"/>
        </div>
    );
};

export default ImageChangeOnMouseHover;