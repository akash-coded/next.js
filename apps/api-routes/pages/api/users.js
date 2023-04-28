import axios from 'axios';

export default async function handler(req, res) {
    try {
        const { page } = req.query;
        const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=6`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching users" });
    }
}