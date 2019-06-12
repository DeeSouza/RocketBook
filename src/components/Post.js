import React, { Component } from "react";
import PostHeader from "./PostHeader";

class Post extends Component {
    render() {
        return (
            <div className="post">
                <PostHeader />

                <div className="text-post">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum incidunt maiores nam tempora, nisi sed ea vero
                    cupiditate. Cum fugiat at sint dolorem error necessitatibus
                    fuga facilis autem aperiam sequi.
                </div>
            </div>
        );
    }
}

export default Post;
