import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

const PostDetails = ({ post }) => {
  const { dispatch } = useContext(PostContext);

  return (
    <li onClick={() => dispatch({type: "REMOVE_POST", id:post.id})}>
      <div className="post">
        <img src={post.image} alt="" />
        <div>
          <div className="id">
            <small>{post.id}</small>
          </div>
          <div className="user">{post.userName}</div>
          <div className="text">{post.text}</div>
        </div>
      </div>
    </li>
  );
};

export default PostDetails;
