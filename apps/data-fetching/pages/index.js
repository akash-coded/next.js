import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import UserCard from "../components/UserCard";

// SSG
// const HomePage = ({ users, currentPage, totalPages }) => (
//   <div>
//     <h1>Home Page</h1>
//     <div style={{ display: "flex", flexWrap: "wrap" }}>
//       {users.map((user) => (
//         <UserCard key={user.id} user={user} />
//       ))}
//     </div>
//   </div>
// );

// export async function getStaticProps() {
//   const response = await axios.get('https://reqres.in/api/users');
//   const users = response.data.data;
//   return { props: { users } };
// }

// SSR
const HomePage = ({ users }) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSearch} method="get" style={{ marginBottom: '1rem' }}>
        <input type="text" name="q" placeholder="Search users..." defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const response = await axios.get(`https://reqres.in/api/users?per_page=12`);
  const users = response.data.data;
  return { props: { users } };
}

export default HomePage;
