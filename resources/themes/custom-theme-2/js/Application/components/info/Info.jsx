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
                                                            Families start by building colorful altars called ofrendas, decorating them
                                                            with bright cempasúchil flowers, sugar skulls, and the favorite foods of
                                                            the departed to guide their spirits back to the world of the living.
                                                        </div>
                                                    </div>
                                                    <div className="tab-content__about-step">
                                                        <div className="content-text__title">
                                                            Beginning
                                                        </div>
                                                        <div className="g-text--default">
                                                            The event begins on November 1st, known as the Day of the Innocents.
                                                            Families visit cemeteries to clean and decorate graves with candles and
                                                            marigolds, creating a warm and golden atmosphere to welcome young souls.
                                                        </div>
                                                    </div>
                                                    <div className="tab-content__about-step">
                                                        <div className="content-text__title">
                                                            Action
                                                        </div>
                                                        <div className="g-text--default">
                                                            The celebration moves to the streets with grand parades, where people paint
                                                            their faces as Catrinas and wear elegant costumes. Music and dancing fill
                                                            the air, turning the city into a vibrant tribute to those who passed.
                                                        </div>
                                                    </div>
                                                    <div className="tab-content__about-step">
                                                        <div className="content-text__title">
                                                            Ending
                                                        </div>
                                                        <div className="g-text--default">
                                                            The festival concludes on November 2nd with final prayers and shared meals.
                                                            As the candles flicker out, the spirits are bid a peaceful farewell until
                                                            next year, leaving a sense of deep connection and eternal memory.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-content__about--right">
                                                    <div className="tab-content__about-screens">
                                                        <Slider settings={sliderScreens}>
                                                            <img src="media/custom-theme-2/tabs/about/item-1.jpg" />
                                                            <img src="media/custom-theme-2/tabs/about/item-2.jpg" />
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-12 content-mgTop--type1 g-text--default">
                                                The holiday is officially over, but Mexico continues to live in its rhythm.
                                                A few days later, smaller local events are organized, in which the best folk
                                                dancers come out again, already in an atmosphere of peace. Many tourists purposely
                                                stay a few days longer to see this. It's less crowded, but no less vivid, and
                                                sometimes the impressions are even stronger, because the local soul is performing.
                                                In addition, markets continue in street areas for several more days. For those who
                                                want to take a break, this time is perfect: you can enjoy Mexico without the crazy crowd.
                                            </div>

                                            <div className="col-md-6 content-mgTop--type2 tab-content__about-aside--left">
                                                <div className="content-text__subtitle">
                                                    The origins
                                                </div>
                                                <div className="content-mgTop--type3 g-text--default">
                                                    Day of the Dead roots go back thousands of years to the Aztec empire, where death
                                                    was seen as a natural phase in life's long journey. Following the Spanish conquest,
                                                    these ancient indigenous traditions merged with Catholic rituals, creating the
                                                    unique Mexican holiday that we observe today across the entire country.
                                                </div>
                                            </div>
                                            <div className="col-md-6 content-mgTop--type2 tab-content__about-aside--right">
                                                <div className="content-text__subtitle">
                                                    Impressions
                                                </div>
                                                <div className="content-mgTop--type3 g-text--default">
                                                    This is a profound experience that needs to be lived, not just watched,
                                                    where the streets are filled with music, orange flowers and glowing candles.
                                                    It creates a feeling of eternal connection and peace; the festival gives
                                                    unforgettable emotions and a touch to the very soul of Mexico’s heritage.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab--services" className="tab-content__item">
                                        <div className="content-header__title">
                                            Some features
                                        </div>

                                        <div className="g-text--default">
                                            The Day of the Dead in Mexico lasts from November 1 to 2, but ppreparations begin many
                                            weeks before with the careful creation of traditional altars and markets. Each day has a
                                            special meaning: from honoring children to welcoming adult spirits. No matter
                                            how you spend the holiday, these sacred moments will stay with you for the rest
                                            of your life.
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
                                                        The Day of the Dead has its roots in ancient Aztec culture, where death
                                                        was seen as a new stage of life. After the Spanish arrival, these rituals
                                                        merged with Catholic All Saints' Day, creating a unique tradition of
                                                        building altars and decorating graves with bright flowers to guide souls home.
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
                                                        Indigenous beliefs are at the core of the festival, but over centuries it
                                                        evolved into a national symbol of Mexico. Traditional elements like sugar
                                                        skulls, papel picado, and Catrina figures became essential parts of the
                                                        holiday, blending ancient history with the modern spirit of Mexican art.
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
                                                        Every year, communities create unique displays for the grand parade,
                                                        where thousands of people dress as skeletons. It’s not just a show; it’s
                                                        a cultural performance where every costume and painted face tells a story
                                                        about ancestors and their legacy.
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
                                                        Many families spend months preparing for these two days, saving money for expensive
                                                        marigolds and special offerings. Participating in the parade is a great honor;
                                                        people often handcraft their own elaborate costumes for the massive procession in
                                                        Mexico City to show their deep respect for the tradition.
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
                                                        The sound of the festival is a mix of traditional mariachi and folk songs that
                                                        celebrate life and memory. Iconic melodies like "La Llorona" convey the emotional
                                                        depth of the holiday, blending beautiful sadness with the festive energy that can
                                                        be heard in every street and cemetery across Mexico.
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
                                                        In the early 20th century, the "La Calavera Catrina" became the most famous symbol of
                                                        the holiday. Originally created as a political satire, it eventually evolved into a
                                                        global icon of the Mexican Day of the Dead, representing the idea that in death,
                                                        everyone is equal regardless of their status.
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
                                                Immerse yourself in the magic of Mexico's Day of the Dead and experience its
                                                ancient soul from the inside. Enjoy the vibrant traditions and create vivid
                                                memories that will stay with you for the rest of your life.
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
                                                            <img src="media/custom-theme-2/tabs/gallery/item-1.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-2/tabs/gallery/item-2.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-2/tabs/gallery/item-3.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-2/tabs/gallery/item-4.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="gallery__slider-item">
                                                        <div className="gallery__slider-item--content">
                                                            <img src="media/custom-theme-2/tabs/gallery/item-5.jpg" />
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
