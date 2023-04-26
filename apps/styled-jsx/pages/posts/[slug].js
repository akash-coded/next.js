import React from "react";
import Header from "@/components/Header";
import Post from "@/components/Post";
// import React, { useState, useEffect } from "react";
// import { withRouter } from 'next/router';

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

const PostPage = ({ post }) => (
  <>
    <Header />
    <main>
      <Post post={post} />
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
    `}</style>
  </>
);

// SSG
export async function getStaticPaths() {
  const paths = mockPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = mockPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}

// SSR
// export async function getServerSideProps({ params }) {
//   const post = mockPosts.find((post) => post.slug === params.slug);

//   return { props: { post } };
// }

export default PostPage;

// Fetching data on the client-side using React hooks and APIs like `fetch` or libraries like `axios`.
// Note - `axios` is not supported in Next.js by default. You can use `isomorphic-unfetch` instead.
// `axios` is not supported in getStaticProps or getStaticPaths or getServerSideProps. Instead, you can use `isomorphic-unfetch` or `node-fetch` to make requests.
// const PostPage = ({ slug }) => {
//     const [post, setPost] = useState(null);

//     useEffect(() => {
//       const fetchPost = async () => {
//         // Replace this with an actual API call or data fetching method
//         const fetchedPost = mockPosts.find((post) => post.slug === slug);
//         setPost(fetchedPost);
//       };

//       fetchPost();
//     }, [slug]);

//     // Render a loading state while the data is being fetched
//     if (!post) {
//       return <div>Loading...</div>;
//     }

//     // Render the post content when the data is fetched
//     return (
//       <>
//         <Header />
//         <Post post={post} />
//       </>
//     );
//   };

// const PostPageWithSlug = (props) => <PostPage slug={props.router.query.slug} />;
// export default withRouter(PostPageWithSlug);
