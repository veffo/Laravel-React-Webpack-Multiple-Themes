import React, { Component } from "react";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import useScript from "../../../../../../assets/scripts/useScript";

class Intro extends Component {
    afterLoadPage = () => {
        useScript.afterLoadingRequest().then(() => {
            useScript.modalWindowIntro();
        });
    };

    componentDidMount() {
        useScript.onPageLoad(this.afterLoadPage());
    };

    render() {
        return (
            <>
                <section className="с-intro g-pdMobile">
                    <div className="intro__bg"></div>

                    <div className="intro__modal--wrapper">
                        <div className="intro__modal g-pdMobile">
                            <VideoPlayer
                                src="media/custom-theme-2/modal/video.mp4"
                                poster="media/custom-theme-2/modal/poster.jpg"
                                // controls={['play', 'progress', 'fullscreen']}
                                removeControls={["pip"]}
                            />
                        </div>
                        <div className="intro__modal-close"></div>
                    </div>

                    <div className="container l-content--wrapper">
                        <div className="row c-content">
                            <div className="col-md-12 c-content--inner">
                                <div className="c-content--left">
                                    <div className="content__title">
                                        Mexico's annual
                                        Day of the Dead.
                                    </div>
                                </div>

                                <div className="c-content--right">
                                    <div className="overlay"></div>
                                    <div className="content__desc">
                                        Mexico's Day of the Dead is a major annual
                                        festival on November 1–2 that honors deceased
                                        loved ones.
                                    </div>

                                    <div className="c-content__buttons">
                                        <a href="#info" className="btn content__btn--gti is-toSection">
                                            For The Holiday
                                        </a>

                                        <a href="#" className="c-content__btn--video">
                                            <i className="fa-sharp fa-solid fa-play btn-video__icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="с-social__list">
                        <li className="social__item">
                            <a href="#">
                                <i className="fa-brands fa-square-facebook social-item__icon"></i>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#">
                                <i className="fa-brands fa-twitter social-item__icon"></i>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#">
                                <i className="fa-brands fa-instagram social-item__icon"></i>
                            </a>
                        </li>
                    </ul>

                    <div className="c-scroll">
                        <a href="#info" className="is-toSection">
                            <i className="fa-light fa-arrow-down scroll__icon"></i>
                        </a>
                    </div>
                </section>
            </>
        );
    };
};

export default Intro;
