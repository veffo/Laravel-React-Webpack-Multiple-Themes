import React, { Component } from "react";
import useScript from "../../../../assets/scripts/useScript";

class ArrowToTop extends Component {
    afterLoadPage = () => {
        useScript.afterLoadingRequest().then(() => {
            useScript.scrollToTopButton();
        });
    };

    componentDidMount() {
        useScript.onPageLoad(this.afterLoadPage());
    };

    render() {
        return (
            <>
                <section className="c-arrowToTop">
                    <a href="#top" className="c-arrowToTop__link">
                        <i className="fa-regular fa-arrow-up-to-line"></i>
                    </a>
                </section>
            </>
        );
    };
};

export default ArrowToTop;
