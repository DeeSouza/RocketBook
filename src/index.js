import React, { Component } from "react";
import { render } from "react-dom";

import Header from "./components/Header";
import Post from "./components/Post";

import "./assets/style.scss";

class App extends Component {
    render() {
        return (
            <div id="wrapper">
                <Header />

                <div id="wrapper-post">
                    <Post />
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));
