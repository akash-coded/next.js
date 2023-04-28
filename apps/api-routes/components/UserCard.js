import React from "react";
import Link from "next/link";


const UserCard = ({ user }) => (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <img
            src={user.avatar}
            alt={user.first_name}
            style={{ width: "64px", height: "64px", marginRight: "1rem" }}
        />

        <div>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
        </div>

        <Link href={`/users/${user.id}`}>
            View Details
        </Link>
    </div>
);

export default UserCard;
