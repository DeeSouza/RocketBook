import React, { Component } from "react";
import PostHeader from "./PostHeader";
import Comment from "./Comment";

const Post = ({ item }) => (
    <div className="post">
        <PostHeader
            author={item.author}
            date={item.date}
            avatar={item.avatar}
        />

        <div className="text-post">{item.text}</div>

        <div className="comments">
            {item.comments.map(comment => (
                <Comment comment={comment} key={comment.id} />
            ))}
        </div>
    </div>
);

export default Post;
