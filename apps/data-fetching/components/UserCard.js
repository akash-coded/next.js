import React from "react";

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
    </div>
);

export default UserCard;
