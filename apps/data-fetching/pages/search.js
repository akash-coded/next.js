import React from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

const SearchPage = ({ users }) => (
    <div>
        {users.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
    </div>
);

export async function getServerSideProps({ query }) {
    const search = query.q || '';
    const response = await axios.get(`https://reqres.in/api/users?per_page=12`);
    const allUsers = response.data.data;
    const users = search ? allUsers.filter((user) => user.first_name.toLowerCase().includes(search.toLowerCase())) : allUsers;
    return { props: { users } };
}

export default SearchPage;