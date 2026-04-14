import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";

const routes = [
    { path: "/", name: "Main", Component: Main },
    { path: "/theme-2", name: "Theme-2", Component: Main },
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
