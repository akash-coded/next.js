import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { topic } = router.query;
  const { slug } = router.query;

  return (
    <div>
      <h1>Topic: { topic }</h1>
      <h2>Post #{slug}</h2>
    </div>
  );
}