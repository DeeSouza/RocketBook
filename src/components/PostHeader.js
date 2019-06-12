import React from "react";

const PostHeader = ({ author, date, avatar }) => (
    <div className="post-header">
        <div className="avatar">
            <img src={avatar} alt={author} />
        </div>
        <div className="author">
            <h4>{author}</h4>
            <h6>{date}</h6>
        </div>
    </div>
);

export default PostHeader;
