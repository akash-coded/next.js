import React from "react";
import Link from "next/link";

const UserCard = ({ user }) => {
    return (
        <div>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h3>{user.first_name} {user.last_name}</h3>
            <Link href={`/users/${user.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default UserCard;