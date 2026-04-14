const SwiperControl = {
    allSliders: {},

    goNext: (sliderId) => {
        const slider = SwiperControl.allSliders[sliderId];

        if(slider) {
            slider.slideNext();
        };
    },

    goPrev: (sliderId) => {
        const slider = SwiperControl.allSliders[sliderId];

        if(slider) {
            slider.slidePrev();
        };
    },
};

export default SwiperControl;
