import Link from 'next/link';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Fancy Index Page</h1>
      <p className={styles.description}>
        This is a fancy home page built with Next.js and a custom server.
      </p>
      <Link href="/about">
        <button className={styles.link}>Go to the About page</button>
      </Link>
      <p className={styles.description}>
        Check out the custom server-side rendered page below:
      </p>
      <Link href="/api/custom">
        <button className={styles.link}>Go to the Custom server-side page</button>
      </Link>
    </div>
  );
};

export default HomePage;