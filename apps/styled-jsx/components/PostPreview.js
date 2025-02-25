import React from "react";
import Link from "next/link";

const PostPreview = ({ post }) => (
  <>
    <div className="post-preview">
      <h2 className="post-title">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="post-excerpt">{post.excerpt}</p>
    </div>
    <style jsx>{`
      .post-preview {
        display: flex;
        flex-direction: column;
        margin-bottom: 60px;
      }
      .post-title {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 0;
      }
      .post-excerpt {
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 0;
      }
    `}</style>
  </>
);

export default PostPreview;
