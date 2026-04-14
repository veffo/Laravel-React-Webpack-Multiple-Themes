import React, { Component } from "react";
import Swiper from "react-id-swiper";
import SwiperControl from "./SwiperControl";
import "swiper/css/swiper.css";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiper: null,
        };
    };

    setSwiper = (slider) => {
        if(slider) {
            const { sliderId, sliderUpdate } = this.props;
            this.setState({swiper: slider});

            if(sliderId) {
                SwiperControl.allSliders[sliderId] = slider;
            };

            slider.on("slideChange transitionEnd reachEnd reachBeginning fromEdge", () => {
                if(sliderUpdate) {
                    this.props.sliderUpdate();
                };
            });
        };
    };

    componentWillUnmount() {
        const { sliderId } = this.props;

        if(sliderId) {
            delete SwiperControl.allSliders[sliderId];
        };
    };

    render() {
        const params = {
            ...this.props.settings,
            watchSlidesProgress: true,
        };

        return (
            <Swiper {...params} getSwiper={this.setSwiper}>
                {this.props.children}
            </Swiper>
        );
    };
};

export default Slider;
