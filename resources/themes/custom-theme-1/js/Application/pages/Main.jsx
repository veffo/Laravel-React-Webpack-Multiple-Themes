import React, { Component } from "react";
import MainArea from "../layouts/MainArea";
import HeaderMenu from "../components/headerMenu/HeaderMenu";
import Intro from "../components/intro/Intro";
import Info from "../components/info/Info";
import Footer from "../components/footer/Footer";

class Main extends Component {
    render() {
        return (
            <>
                <MainArea>
                    <HeaderMenu />
                    <Intro />
                    <Info />
                    <Footer />
                </MainArea>
            </>
        );
    };
};

export default Main;
