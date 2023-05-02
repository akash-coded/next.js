import Link from 'next/link';
import styles from '../styles/About.module.css';

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Page</h1>
            <p className={styles.description}>
                This is the About page for our fancy Next.js app with a custom server.
            </p>
            <Link href="/">
                <button className={styles.link}>Go back to the Home page</button>
            </Link>
        </div>
    );
};

export default AboutPage;