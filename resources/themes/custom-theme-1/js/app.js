/**
 * First load all of this project"s JavaScript dependencies
*/

require("./bootstrap");

/**
 * React application
*/

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Application/App";

if(document.querySelector("#app")) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    , document.querySelector("#app"));
};
