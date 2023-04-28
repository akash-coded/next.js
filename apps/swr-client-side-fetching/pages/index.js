import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import UserCard from "../components/UserCard";

const HomePage = () => {
  const { data, error } = useSWR("https://reqres.in/api/users?page=1", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  const users = data.data;

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default HomePage;