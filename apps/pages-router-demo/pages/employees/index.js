import Link from 'next/link';
import { useRouter } from 'next/router'

const employees = [
    { id: '101', name: 'John Doe' },
    { id: '102', name: 'Jane Smith' },
];

export default function Employees() {
    const router = useRouter();

    return (
        <div>
            <nav>
                <button onClick={() => router.back()}>Go back</button> |
                <Link href="/"> Home</Link> |
                <button onClick={() => router.push('/about')}>
                    About us
                </button>
            </nav>
            <hr />
            <h1>Employee List</h1>
            <ul>
                {employees.map((emp) => (
                    <li key={emp.id}>
                        <Link href={`/employees/${emp.id}`} target="_blank" rel="noopener noreferrer">{emp.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
