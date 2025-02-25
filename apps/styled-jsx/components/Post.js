import React from "react";

const Post = ({ post }) => (
  <>
    <article>
      <h1>{post.title}</h1>
      <div className="post-content">{post.content}</div>
    </article>
    <style jsx>
      {`
        article {
          display: flex;
          flex-direction: column;
          margin-bottom: 60px;
          padding: 20px;
        }
        h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .post-content {
          font-size: 20px;
          font-weight: 300;
          margin-bottom: 0;
          line-height: 1.6;
        }
      `}
    </style>
  </>
);

export default Post;
