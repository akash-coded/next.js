import axios from "axios";

const UserDetails = ({ user }) => {
    return (
        <div>
            <h1>{user.first_name} {user.last_name}</h1>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <p>Email: {user.email}</p>
        </div>
    );
};

export async function getServerSideProps({ params }) {
    const response = await axios.get(`https://reqres.in/api/users/${params.id}`);
    const user = response.data.data;

    return { props: { user } };
}

export default UserDetails;