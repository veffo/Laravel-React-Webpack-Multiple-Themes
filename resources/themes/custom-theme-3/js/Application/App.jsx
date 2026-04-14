import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";

const routes = [
    { path: "/", name: "Main", Component: Main },
    { path: "/theme-3", name: "Theme-3", Component: Main },
];

class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    {routes.map(({ path, name, Component }) => (
                        <Route key={name} path={path} exact>
                            <Component />
                        </Route>
                    ))}
                </Router>
            </>
        );
    };
};

export default App;
