import Link from 'next/link';

const projects = [
    { id: '101', name: 'AI Chatbot' },
    { id: '102', name: 'Banking App' },
];

export default function Projects() {
    return (
        <div>
            <h1>Project List</h1>
            <ul>
                {projects.map((proj) => (
                    <li key={proj.id}>
                        <Link href={`/projects/${proj.id}`}>{proj.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
