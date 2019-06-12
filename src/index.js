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

        this.setState({
            posts: posts.data
        });
    }

    render() {
        return (
            <div id="wrapper">
                <Header item="oi" />

                <div id="wrapper-post">
                    {this.state.posts.map(item => (
                        <Post key={item.id} item={item} />
                    ))}
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));
