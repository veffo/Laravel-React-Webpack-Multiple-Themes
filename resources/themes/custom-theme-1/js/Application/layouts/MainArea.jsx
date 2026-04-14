import React, { Component } from "react";
import useScript from "../../../../../assets/scripts/useScript";
import Preloader from "../../../../common/components/preloader/Preloader";
import initialState from "../../../../../assets/store/initialState";

class MainArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: initialState.isActive,
        };
    };

    afterLoadPage = () => {
        useScript.afterLoadingRequest().then(() => {
            useScript.noReloadThisPage();
            useScript.clickScrollToSection();
        });
    };

    componentDidMount() {
        useScript.loadingPreloader();
        useScript.onPageLoad(this.afterLoadPage());

        if("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual"; // off auto restore scroll browser position
        };

        setTimeout(() => {
            window.scrollTo(0, 0);
            this.setState({isActive: true});
        }, 0);
    };

    componentWillUnmount() {
        if("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "auto"; // return scroll scroll browser position
        };
    };

    render() {
        return (
            <>
                <div className="c-page">
                    <Preloader />
                    {this.state.isActive ? this.props.children : null}
                </div>
            </>
        );
    };
};

export default MainArea;
