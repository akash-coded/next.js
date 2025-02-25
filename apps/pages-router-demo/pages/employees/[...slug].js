import { useRouter } from 'next/router';

export default function EmployeeDynamicPage() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>Multiple Path Segments Page | Catch-All Dynamic Routes</h1>
            <hr />
            <h2>Employee Dynamic Page</h2>
            <p>Path segments: {slug?.join(' / ') || "No parameters"}</p>
        </div>
    );
}
