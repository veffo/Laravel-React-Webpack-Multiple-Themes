import React, { Component, createRef } from "react";
import { Plyr } from "plyr-react";

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.plyrRef = createRef();
        this.state = {
            src: this.props.src || "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
            poster: this.props.poster || "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
            type: this.props.type || "video/mp4",
            size: this.props.size || "auto",
            controls: this.props.controls || [
                "play-large", "play", "progress", "current-time",
                "mute", "volume", "captions", "settings",
                "pip", "airplay", "fullscreen",
            ],
            removeControls: this.props.removeControls || [],
        };
    };

    componentDidMount() {
        window.videoPlayerRef = this.plyrRef;
    };

    render() {
        const { src, type, size, poster, controls, removeControls } = this.state;

        const filteredControls = (controls || defaultControls).filter(
            control => !removeControls.includes(control)
        );

        const plyrProps = {
            source: {
                type: "video",
                sources: [
                    {
                        src: src,
                        type: type,
                        size: size,
                    },
                ],
                poster: poster,
            },
            options: {
                controls: filteredControls,
                pip: true,
            },
        };

        return (
            <div className="video__player">
                <Plyr ref={this.plyrRef} {...plyrProps} />
            </div>
        );
    };
};

export default VideoPlayer;
