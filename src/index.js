import React, { Component } from "react";
import { render } from "react-dom";

import Header from "./components/Header";
import Post from "./components/Post";

import "./assets/style.scss";

import API from "./config/api";

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        const posts = await API.get("posts");
        console.log(posts);
    }

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
