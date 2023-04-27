import React from "react";
import axios from "axios";
import UserCard from "../components/UserCard";



const HomePage = ({ users, currentPage, totalPages }) => (
  <div>
    <h1>Home Page</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  </div>
);

export async function getStaticProps() {
  const response = await axios.get('https://reqres.in/api/users');
  const users = response.data.data;
  return { props: { users } };
}

export default HomePage;
