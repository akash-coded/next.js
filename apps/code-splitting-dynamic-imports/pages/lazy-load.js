import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'));

export default function LazyLoad() {
    return (
        <div>
            <h1>Lazy Loading a Heavy Component</h1>
            <HeavyComponent />
        </div>
    );
}