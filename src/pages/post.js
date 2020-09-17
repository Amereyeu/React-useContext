import React, { useContext } from "react";
import PostDetails from "../components/PostDetails";
import NewPostForm from "../components/NewPostForm";
import { PostContext } from "../contexts/PostContext";

const PostList = () => {
  const { posts } = useContext(PostContext);
console.log("posts", posts);
  return (
    <>
      {posts.length ? (
        <div className="book-list">
          <ul>
            {posts.map((post) => {
              return <PostDetails post={post} key={post.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">Nothing here.</div>
      )}

      <NewPostForm />
    </>
  );
};

export default PostList;
