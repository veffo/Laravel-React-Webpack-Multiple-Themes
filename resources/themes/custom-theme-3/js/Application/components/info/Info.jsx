import React, { Component } from "react";
import Slider from "../slider/Slider";
import SwiperControl from "../slider/SwiperControl";
import useScript from "../../../../../../assets/scripts/useScript";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderCheck: {},
        };
    };

    afterLoadPage = () => {
        useScript.afterLoadingRequest().then(() => {
            const tabPanels = document.querySelectorAll(".tab-content__item");
            const tabItems = document.querySelectorAll(".tab-nav__list li");
            const tabLinks = [];

            if(!(tabPanels || tabItems)) {
                return;
            };

            tabItems.forEach(function(item) {
                let link = item.querySelector("a");
                tabLinks.push(link);

                if(item.classList.contains("is-active")) {
                    item.setAttribute("data-tab-active", "");
                };
            });

            tabLinks.forEach(function(link, i) {
                link.addEventListener("click", function(e) {
                    e.preventDefault();
                    useScript.tabClickEventActive(this, tabLinks, tabPanels, i);
                });
            });

            tabPanels.forEach(function(panel) {
                let attributes = {
                    "aria-hidden": "true",
                };

                if(panel.hasAttribute("data-tab-active")) {
                    attributes["aria-hidden"] = "false";
                    panel.setAttribute("data-tab-active", "");
                };

                for(let key in attributes) {
                    panel.setAttribute(key, attributes[key]);
                };
            });
        });
    };

    componentDidMount() {
        useScript.onPageLoad(this.afterLoadPage());
    };

    handleSliderUpdate = (sliderId) => {
        this.setState((prevState) => ({
            sliderCheck: {
                ...prevState.sliderCheck,
                [sliderId]: (prevState.sliderCheck[sliderId] || 0) + 1,
            },
        }));
    };

    render() {
        const sliderScreens = {
            slidesPerView: 2,
            initialSlide: 0,
            spaceBetween: 0,
            touchRatio: 1,
            grabCursor: true,
            centeredSlides: true,
            loop: false,
            effect: "coverflow",
            coverflowEffect: {
                rotate: 0,
                stretch: 290,
                depth: 80,
                modifier: 1,
                slideShadows: false,
            },
            //autoplay: {
            //    delay: 500,
            //    disableOnInteraction: false,
            //},
            //breakpoints: {
            //    768: {
            //        slidesPerView: 2,
            //    },
            //    1024: {
            //        slidesPerView: 3,
            //    },
            //},
        };

        const sliderGallery = {
            customTitle: "sliderGallery",
            slidesPerView: "auto",
            initialSlide: 0,
            spaceBetween: 0,
            touchRatio: 1,
            touchReleaseOnEdges: true,
            grabCursor: true,
            loop: false,
        };

        const idSliderGallery = sliderGallery.customTitle;
        const titleSliderGallery = SwiperControl.allSliders[sliderGallery.customTitle];
        const isBeginGallery = titleSliderGallery ? titleSliderGallery.isBeginning : true;
        const isEndGallery = titleSliderGallery ? titleSliderGallery.isEnd : false;

        return (
            <>
                <section id="info" className="c-info g-pdMobile">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="c-tab__nav">
                                    <ul className="tab-nav__list">
                                        <li className="tab-list__item is-active" data-id="tab--about">
                                            <a href="#" className="tab-list__link">
                                                About
                                            </a>
                                        </li>
                                        <li className="tab-list__item">
                                            <a href="#" className="tab-list__link">
                                                Facts
                                            </a>
                                        </li>
                                        <li className="tab-list__item">
                                            <a href="#" className="tab-list__link">
                                                Gallery
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="c-tab__content">
                                    <div id="tab--about" className="tab-content__item" data-tab-active>
                                        <div className="content-header__title">
                                            Get to know the process
                                        </div>

                                        <div className="row tab-content">
                                            <div className="col-md-12 tab-content__about">
                                                <div className="tab-content__about--left">
                                                    <div className="tab-content__about-step">
                                                        <div className="content-text__title">
                                                            Preparation
                                                        </div>
                                                        <div className="g-text--default">
                                                            Throughout the month, houses are decorated, Christmas trees are set up,
                                                            gifts are carefully wrapped and festive markets open in town squares where
                                                            people gather to enjoy warm drinks and holiday music.
                                                        </div>
                                                    </div>
                                                    <div className="tab-content__about-step">
                                                        <div className="content-text__title">
                                                            Beginning
                                                        </div>
                                                        <div className="g-text--default">
                                                            Traditionally, the holiday season begins with the lighting of the first
                                                            Advent candle or the official opening of the local fairs. This period,
                                                            filled with anticipation, brings a sense of wonder to children and adults.
                                                        </div>
                                                    </div>
                                                    <div className="tab-content__about-step">
                                                        <div className="content-text__title">
                                                            Action
                                                        </div>
                                                        <div className="g-text--default">
                                                            The celebration reaches its peak on Christmas Eve: families gather for a
                                                            festive dinner, carols are sung by the fireplace and the atmosphere is
                                                            filled with joy as everyone waits for the magical morning to arrive.
                                                        </div>
                                                    </div>
                                                    <div className="tab-content__about-step">
                                                        <div className="content-text__title">
                                                            Ending
                                                        </div>
                                                        <div className="g-text--default">
                                                            The holiday traditionally lasts until Epiphany in early January. On the last
                                                            days of the season, final family dinners are held and the festive decorations
                                                            are slowly tucked away, leaving warm memories of the winter.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-content__about--right">
                                                    <div className="tab-content__about-screens">
                                                        <Slider settings={sliderScreens}>
                                                            <img src="media/custom-theme-3/tabs/about/item-1.jpg" />
                                                            <img src="media/custom-theme-3/tabs/about/item-2.jpg" />
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 content-mgTop--type1 g-text--default">
                                                The main celebration is over, but the winter magic continues for a while. A few days
                                                later, New Year's events are organized, in which the cities sparkle with fireworks,
                                                already in an atmosphere of new hopes. Many tourists purposely stay longer to see this
                                                transition. It's still festive, but more relaxed, and the impressions are even stronger
                                                because of the winter charm. In addition, holiday sales continue in the shops for several
                                                more weeks. For those who want a calm walk, this time is perfect.
                                            </div>

                                            <div className="col-md-6 content-mgTop--type2 tab-content__about-aside--left">
                                                <div className="content-text__subtitle">
                                                    The origins
                                                </div>
                                                <div className="content-mgTop--type3 g-text--default">
                                                    Christmas traditions originate from ancient midwinter festivals and the biblical story
                                                    of the Nativity. Over centuries, these customs merged with various local folk rituals
                                                    from across Europe, creating the beloved holiday we know today, celebrated with
                                                    candles and trees by millions of families.
                                                </div>
                                            </div>
                                            <div className="col-md-6 content-mgTop--type2 tab-content__about-aside--right">
                                                <div className="content-text__subtitle">
                                                    Impressions
                                                </div>
                                                <div className="content-mgTop--type3 g-text--default">
                                                    This is a magical season that needs to be felt, not just seen, where the streets
                                                    are filled with glowing lights, festive songs and the scent of pine. It creates a
                                                    feeling of universal peace and kindness; Christmas gives unforgettable emotions
                                                    and a touch to the very soul of winter magic.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab--services" className="tab-content__item">
                                        <div className="content-header__title">
                                            Some features
                                        </div>

                                        <div className="g-text--default">
                                            The Christmas season in Europe lasts for several weeks, but in fact the holiday spirit
                                            covers all of December, including advent markets and local fairs. Every week has its
                                            own mood: from the quiet anticipation to the joyful finale. No matter how many days
                                            you spend here, the magic will stay with you for the rest of your life.
                                        </div>

                                        <div className="row tab-content__facts">
                                            <div className="col-lg-4 col-sm-6 tab-content__facts-item content-mgTop--type2">
                                                <div className="tab-content__facts-item__icon">
                                                    <i className="fa-solid fa-wreath-laurel"></i>
                                                </div>
                                                <div className="tab-content__facts-text">
                                                    <div className="content-mgTop--type3 content-text__title">
                                                        Traditions
                                                    </div>
                                                    <div className="content-mgTop--type3 g-text--default">
                                                        Christmas traditions came to Europe from ancient midwinter festivals. Over the
                                                        centuries, these customs merged with various local folk rituals, creating the
                                                        beloved holiday we know today. The decorated tree was brought to homes in the
                                                        16th century and slowly turned into a global symbol of the season.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 tab-content__facts-item content-mgTop--type2">
                                                <div className="tab-content__facts-item__icon">
                                                    <i className="fa-solid fa-chart-mixed"></i>
                                                </div>
                                                <div className="tab-content__facts-text">
                                                    <div className="content-mgTop--type3 content-text__title">
                                                        Development
                                                    </div>
                                                    <div className="content-mgTop--type3 g-text--default">
                                                        The various regions of Europe had a significant impact on the development of
                                                        the holiday. Northern cozy traditions, German markets, and Victorian carols
                                                        have become an integral part of Christmas culture. Modern ornaments, candles,
                                                        and lights are now essential elements that create the festive glow.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 tab-content__facts-item content-mgTop--type2">
                                                <div className="tab-content__facts-item__icon">
                                                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                                                </div>
                                                <div className="tab-content__facts-text content-mgTop--type3">
                                                    <div className="content-mgTop--type3 content-text__title">
                                                        Performance
                                                    </div>
                                                    <div className="content-mgTop--type3 g-text--default">
                                                        Every year, local communities choose a theme for their holiday displays — from nativity
                                                        scenes to light shows. It can be a traditional fair, a musical performance, or a
                                                        street parade. The entire town center is built around this festive idea, from holiday
                                                        stalls to decorated squares filled with people and joy.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 tab-content__facts-item content-mgTop--type2">
                                                <div className="tab-content__facts-item__icon">
                                                    <i className="fa-solid fa-mask"></i>
                                                </div>
                                                <div className="tab-content__facts-text content-mgTop--type3">
                                                    <div className="content-mgTop--type3 content-text__title">
                                                        The Secret Life
                                                    </div>
                                                    <div className="content-mgTop--type3 g-text--default">
                                                        Many artists and chefs devote all their free time, and sometimes even their money,
                                                        to the holiday preparation. Participation in the Christmas market is a great privilege:
                                                        some people work for months on unique handmade gifts and traditional food to share the
                                                        warmth of the season with all visitors.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 tab-content__facts-item content-mgTop--type2">
                                                <div className="tab-content__facts-item__icon">
                                                    <i className="fa-solid fa-music"></i>
                                                </div>
                                                <div className="tab-content__facts-text content-mgTop--type3">
                                                    <div className="content-mgTop--type3 content-text__title">
                                                        Music
                                                    </div>
                                                    <div className="content-mgTop--type3 g-text--default">
                                                        One of the iconic hits of the winter season is the song "Silent Night" or modern
                                                        classics like "Last Christmas". This music conveys the energy of the festive style,
                                                        a musical trend that originated centuries ago and is now heard in every street,
                                                        house and decorated mall around the entire world.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-sm-6 tab-content__facts-item content-mgTop--type2">
                                                <div className="tab-content__facts-item__icon">
                                                    <i className="fa-solid fa-hands-clapping"></i>
                                                </div>
                                                <div className="tab-content__facts-text">
                                                    <div className="content-mgTop--type3 content-text__title">
                                                        Beginning symbol
                                                    </div>
                                                    <div className="content-mgTop--type3 g-text--default">
                                                        At the turn of the 19th and 20th centuries, the image of Santa Claus began to form
                                                        as an independent figure and subsequently became a main symbol of the holiday.
                                                        This jolly character represents the spirit of giving and kindness, uniting people
                                                        of all ages in a celebration of joy and wonder.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab--contact" className="tab-content__item">
                                        <div className="b-container">
                                            <div className="content-header__title">
                                                An exciting sight
                                            </div>
                                            <div className="g-text--default">
                                                Immerse yourself in the atmosphere of the Christmas magic and give yourself the
                                                opportunity to experience all the wonder of winter from the inside, enjoy the
                                                festive traditions and create memories that will stay with you for the rest
                                                of your life.
                                            </div>
                                            <div className="content-gallery__header">
                                                <div className="content-gallery__header-item"></div>
                                                <div className="content-gallery__header-subitem">
                                                    <div className="gallery__buttons">
                                                        <button className={`gallery__buttons-btn ${isBeginGallery ? "_disabled" : ""}`} onClick={(e) => SwiperControl.goPrev(idSliderGallery, e)}>
                                                            <i className="fa-solid fa-arrow-left"></i>
                                                        </button>
                                                        <button className={`gallery__buttons-btn ${isEndGallery ? "_disabled" : ""}`} onClick={(e) => SwiperControl.goNext(idSliderGallery, e)}>
                                                            <i className="fa-solid fa-arrow-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gallery__slider--container">
                                                <Slider sliderId={idSliderGallery} settings={sliderGallery} sliderUpdate={() => this.handleSliderUpdate(idSliderGallery)}>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-3/tabs/gallery/item-1.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-3/tabs/gallery/item-2.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-3/tabs/gallery/item-3.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-3/tabs/gallery/item-4.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-3/tabs/gallery/item-5.jpg" />
                                                        </div>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    };
};

export default Info;
