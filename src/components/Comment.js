import React from "react";

const Comment = ({ comment: { author, content } }) => {
    return (
        <div className="comment">
            <div className="avatar">
                <img
                    src={`${author.avatar}/${author.name}`}
                    alt={author.name}
                />
            </div>
            <div className="text">
                <strong>{author.name} </strong>
                {content}
            </div>
        </div>
    );
};

export default Comment;
