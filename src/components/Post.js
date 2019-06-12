import React, { Component } from "react";
import PostHeader from "./PostHeader";

const Post = ({ item }) => (
    <div className="post">
        <PostHeader
            author={item.author}
            date={item.date}
            avatar={item.avatar}
        />

        <div className="text-post">{item.text}</div>
    </div>
);

export default Post;
