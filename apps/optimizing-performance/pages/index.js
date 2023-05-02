import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
  const res = await axios.get('https://reqres.in/api/users');
  const users = res.data.data;

  return {
    props: {
      users,
    },
  };
}

export default function Home({ users }) {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} prefetch>
              <Image
                src={user.avatar}
                alt={user.first_name}
                width={50}
                height={50}
              />
              {user.first_name} {user.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}