import React from "react";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index}>
            <img src={post.media} alt={`Post ${index}`} />
            <h1>{post.caption}</h1>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Posts;
