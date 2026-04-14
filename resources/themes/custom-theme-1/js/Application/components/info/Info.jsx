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
                                                            Throughout the year, costumes are created, platforms are developed,
                                                            songs are written and rehearsals are held in special pavilions
                                                            where future participants train several times a week.
                                                        </div>
                                                    </div>
                                                    <div className="tab-content__about-step">
                                                        <div className="content-text__title">
                                                            Beginning
                                                        </div>
                                                        <div className="g-text--default">
                                                            Traditionally, the carnival in Rio begins with the transfer of the
                                                            symbolic key of the city to "King Momo". This character, originating
                                                            from ancient Greek mythology, has become a symbol of fun and abundance.
                                                            Only after its appearance does the holiday officially start.
                                                        </div>
                                                    </div>
                                                    <div className="tab-content__about-step">
                                                        <div className="content-text__title">
                                                            Action
                                                        </div>
                                                        <div className="g-text--default">
                                                            The spectacle continues until the morning: each school enters the arena
                                                            for about 60-70 minutes, and the show stretches throughout the night.
                                                            For tourists who have bought tickets to the Sambadrome, Monday is
                                                            the culmination of the holiday.
                                                        </div>
                                                    </div>
                                                    <div className="tab-content__about-step">
                                                        <div className="content-text__title">
                                                            Ending
                                                        </div>
                                                        <div className="g-text--default">
                                                            The carnival traditionally lasts for 5 days from Friday to "fat Tuesday".
                                                            On this last day of the carnival, the final performances are held at the
                                                            sambodrome, where the favorites are determined and the judges give
                                                            the final marks.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-content__about--right">
                                                    <div className="tab-content__about-screens">
                                                        <Slider settings={sliderScreens}>
                                                            <img src="media/custom-theme-1/tabs/about/item-1.jpg" />
                                                            <img src="media/custom-theme-1/tabs/about/item-2.jpg" />
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 content-mgTop--type1 g-text--default">
                                                The holiday is officially over, but Rio continues to live in its rhythm. A few days later,
                                                a parade of champions is organized, in which the best samba schools come out again,
                                                already in an atmosphere of triumph. Many tourists purposely stay a few days longer
                                                to see this event. It's less crowded, but no less vivid, and sometimes the impressions
                                                are even stronger, because the winners are performing. In addition, parties continue
                                                in street clubs and bars for several more days. For those who want to take a break,
                                                this time is perfect: you can enjoy Rio without the crazy crowd.
                                            </div>

                                            <div className="col-md-6 content-mgTop--type2 tab-content__about-aside--left">
                                                <div className="content-text__subtitle">
                                                    The origins
                                                </div>
                                                <div className="content-mgTop--type3 g-text--default">
                                                    Carnival traditions came to Brazil from Portugal in the form of the holiday
                                                    "entrudo" (from the Latin "introitus", meaning "entrance" or "beginning").
                                                    It was celebrated seven weeks before Easter and three days before Ash
                                                    Wednesday, which marks the beginning of Great Lent among Catholics.
                                                </div>
                                            </div>
                                            <div className="col-md-6 content-mgTop--type2 tab-content__about-aside--right">
                                                <div className="content-text__subtitle">
                                                    Impressions
                                                </div>
                                                <div className="content-mgTop--type3 g-text--default">
                                                    This is an event that needs to be lived, not just watched, where
                                                    the streets are filled with people, music and fireworks, creating
                                                    a feeling of universal happiness and freedom, carnival gives
                                                    unforgettable emotions and a touch to the very soul of Brazil.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab--services" className="tab-content__item">
                                        <div className="content-header__title">
                                            Some features
                                        </div>

                                        <div className="g-text--default">
                                            Carnival in Brazil officially lasts for five days, but in fact the
                                            holiday covers several weeks, including rehearsals, street blocks and
                                            the parade of champions. Every day has its own rhythm: from the grand
                                            opening to the triumphant finale. And no matter how many days you spend
                                            on the holiday, the impressions will stay with you for the rest of your life.
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
                                                        Carnival traditions came to Brazil from Portugal in the form of
                                                        the Entrudo holiday, which the Portuguese celebrated before the
                                                        beginning of Lent. The entrudo was brought to the country in the
                                                        16th century and turned into a carnival.
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
                                                        Africans who were brought to Brazil as slaves had a significant
                                                        impact on the development of the festival. African rhythms, dances,
                                                        and musical instruments such as drums have become an integral
                                                        part of carnival traditions.
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
                                                        Every year, samba schools choose a theme for their
                                                        performance — samba-enredo. It can be a mythology, a historical
                                                        figure, a social plot, or a cultural event. The entire school
                                                        curriculum is built around this idea, from costumes to lyrics.
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
                                                        Many dancers and musicians devote all their free time,
                                                        and sometimes even their money, to rehearsals. Participation
                                                        in the parade is not always a free privilege: some people
                                                        pay for a costume to go to the Sambodrome.
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
                                                        One of the iconic hits of the Brazilian carnival is the song
                                                        "Água Mineral" by Timbalada. This track conveys the energy of
                                                        the axé style, a musical trend that originated in the state
                                                        of Bahia in northeastern Brazil.
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
                                                        At the turn of the 19th and 20th centuries, samba began
                                                        to form as an independent genre and subsequently became
                                                        a symbol of the Brazilian carnival.
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
                                                Immerse yourself in the atmosphere of the Brazilian carnival and give
                                                yourself the opportunity to experience all the magic of carnival from
                                                the inside, enjoy the culture of Brazil and create memories that will
                                                stay with you for the rest of your life.
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
                                                            <img src="media/custom-theme-1/tabs/gallery/item-1.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-1/tabs/gallery/item-2.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-1/tabs/gallery/item-3.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-1/tabs/gallery/item-4.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-1/tabs/gallery/item-5.jpg" />
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
