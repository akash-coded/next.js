import Link from 'next/link';

export default function About() {
    return (
        <div>
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