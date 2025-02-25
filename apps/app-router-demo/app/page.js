import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to TCS Project Management Dashboard</h1>
      <nav>
        <Link href="/about">About</Link> |
        <Link href="/projects">Project List</Link>
      </nav>
    </div>
  );
}
