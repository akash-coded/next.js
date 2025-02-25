import React from "react";
import axios from "axios";
import UserCard from "../../components/UserCard";

const PageNav = ({ currentPage, totalPages }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: '1rem' }}>
            {pages.map((page) => (
                <a href={`/page/${page}`} key={page} style={{ margin: '0 0.5rem', fontWeight: currentPage === page ? "bold" : "normal", }}>
                    {page}
                </a>
            ))}
        </div>
    );
};

const PaginatedUsersPage = ({ users, currentPage, totalPages }) => (
    <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
        <div>
            <PageNav currentPage={currentPage} totalPages={totalPages} />
        </div>
    </div>
);

export const getStaticProps = async ({ params }) => {
    const page = params?.page || 1;
    const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
    const users = response.data.data;
    const totalPages = response.data.total_pages;
    return {
        props: {
            users,
            currentPage: parseInt(page),
            totalPages,
        },
    };
}

export async function getStaticPaths() {
    const response = await axios.get("https://reqres.in/api/users");
    const totalPages = response.data.total_pages;
    const paths = Array.from({ length: totalPages }, (_, i) => ({
        params: { page: `${i + 1}` },
    }));
    return {
        paths,
        fallback: false,
    };
}

export default PaginatedUsersPage;
