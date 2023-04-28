import React, { useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

const HomePage = ({ users }) => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`/api/users?page=1`);
    const allUsers = response.data.data;
    setFilteredUsers(
      search ? allUsers.filter((user) => user.first_name.toLowerCase().includes(search.toLowerCase())) : allUsers
    );
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/users?page=1");
  const users = response.data.data;

  return { props: { users } };
}

export default HomePage;