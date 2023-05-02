import axios from 'axios';
import Image from 'next/image';

export async function getStaticPaths() {
    const res = await axios.get('https://reqres.in/api/users');
    const users = res.data.data;

    const paths = users.map(user => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await axios.get(
        `https://reqres.in/api/users/${params.id}`
    );
    const user = res.data.data;

    return { props: { user } };
}

export default function UserDetails({ user }) {
    return (
        <div>
            <h1>
                {user.first_name} {user.last_name}
            </h1>
            <Image
                src={user.avatar}
                alt={user.first_name}
                width={50}
                height={50}
            />
            <p>Email: {user.email}</p>
        </div>
    );
}