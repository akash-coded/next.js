import { useRouter } from 'next/router';
import Link from 'next/link';


export default function EmployeeFlexibleRoute() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>Optional Segments Page | Optional Catch-All Dynamic Routes</h1>
            <hr />
            <h2>Employee Flexible Route</h2>
            <p>Path segments: {slug?.join(' / ') || "Welcome to Employee Dashboard"}</p>
            <Link href={`/dashboard/attendance-log/last-week`}>Last Week's Attendance Logs</Link>
        </div>
    );
}
