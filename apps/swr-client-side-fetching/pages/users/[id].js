import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import Link from "next/link";

const UserDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, error } = useSWR(id ? `https://reqres.in/api/users/${id}` : null, fetcher);

    if (error) return <div>Failed to load user</div>;
    if (!data) return <div>Loading...</div>;

    const user = data.data;

    return (
        <div>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>Email: {user.email}</p>
            <Link href="/">
                <button>Back to Users</button>
            </Link>
            |
            <button onClick={() => router.back()}>Go Back</button>
        </div>
    );
};

export default UserDetails;