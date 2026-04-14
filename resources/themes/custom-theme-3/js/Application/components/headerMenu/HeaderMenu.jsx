import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import useScript from "../../../../../../assets/scripts/useScript";

class Menu extends Component {
    afterLoadPage = () => {
        useScript.afterLoadingRequest().then(() => {
            useScript.mobileHeaderMenu();
            useScript.stickyHeaderMenu();
        });
    };

    componentDidMount() {
        useScript.onPageLoad(this.afterLoadPage());
    };

    render() {
        const { pathname } = this.props.loc;
        const themePaths = [
            "/theme-1",
            "/theme-2",
            "/theme-3",
        ];

        return (
            <>
                <section className="c-headerMenu g-pdMobile">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 l-headerMenu--content">
                                <div className="headerMenu--header">
                                    <div className="c-logo">
                                        <a href={themePaths.includes(pathname) ? pathname : "/"} className="logo__link">
                                            <img className="logo__img" src="media/common/logo.svg" />
                                        </a>
                                    </div>
                                    <div className="c-mobile__toggle">
                                        <span className="mobile__toggle-btn"></span>
                                    </div>
                                </div>

                                <div className="c-nav">
                                    <ul className="l-nav__list">
                                        {themePaths.map((path, index) => (
                                            <li key={path} className="nav__item">
                                                <a
                                                    href={pathname === "/" && index == 0 ? "/" : path}
                                                    className={`nav__link ${pathname === path ? "_active" : (pathname === "/" && index == 0 ? "_active" : "")}`}
                                                >
                                                    Theme {index + 1}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="c-gti">
                                    <a href="#info" className="btn gti__btn is-toSection">
                                        Get The Info
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    };
};

const HeaderMenu = (props) => {
    const loc = useLocation();

    return <Menu {...props} loc={loc} />;
};

export default HeaderMenu;
