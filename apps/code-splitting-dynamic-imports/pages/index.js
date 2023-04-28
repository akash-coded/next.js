import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Dynamic Imports Example</h1>
      <ul>
        <li>
          <Link href="/lazy-load">
            Lazy Loading a Heavy Component
          </Link>
        </li>
        <li>
          <Link href="/conditional-load">
            Conditional Loading of a Component
          </Link>
        </li>
        <li>
          <Link href="/user-role">
            Loading Components Based on User Role
          </Link>
        </li>
      </ul>
    </div>
  );
}