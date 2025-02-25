import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to TCS Employee Management</h1>
      <nav>
        <Link href="/about">About</Link> |
        <Link href="/employees"> Employee List</Link> |
        <Link href="/dashboard"> Employee Dashboard</Link>
      </nav>
    </div>
  );
}
