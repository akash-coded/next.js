import React from "react";
import Header from "@/components/Header";
import PostPreview from "@/components/PostPreview";

const mockPosts = [
  {
    id: 1,
    title: "My first blog post",
    excerpt: "This is the first blog post",
    content: "This is the first blog post content.",
    slug: "my-first-blog-post",
  },
  {
    id: 2,
    title: "My second blog post",
    excerpt: "This is the second blog post",
    content: "This is the second blog post content.",
    slug: "my-second-blog-post",
  },
  {
    id: 3,
    title: "My third blog post",
    excerpt: "This is the third blog post",
    content: "This is the third blog post content.",
    slug: "my-third-blog-post",
  },
];

const HomePage = () => (
  <>
    <Header />
    <main>
      <h1>Welcome 👋</h1>
      {mockPosts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </main>
    <style jsx>{`
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      h1 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 20px;
      }
    `}</style>
  </>
);

export default HomePage;
