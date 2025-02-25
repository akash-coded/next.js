import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Employee() {
    const router = useRouter();
    const { id } = router.query; // Extracting the dynamic id from the URL

    return (
        <div>
            <h1>Single-parameter Page | Specific Dynamic Routes</h1>
            <hr />
            <h2>Employee ID: {id}</h2>
            <Link href={`/employees/${id}/salary/history`} style={{ fontWeight: isActive ? 'bold' : 'normal' }}>Salary History</Link>
        </div>
    );
}
