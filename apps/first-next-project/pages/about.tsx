import Link from 'next/link';
import Head from 'next/head';

export default function About() {
    return (
        <div>
            <Head>
                <title>About | My Blog Site</title>
                <meta name="description" content="About page for my blog site" />
            </Head>

            <h1>About Me</h1>

            <div>
                <Link href="/">
                    Home
                </Link>
                <hr />
                <Link href={{
                    pathname: '/blog/[topic]/[slug]',
                    query: {
                        topic: 'fashion',
                        slug: '123'
                    }
                }}>
                    Latest Fashion Post
                </Link>
            </div>
        </div>
    )
}