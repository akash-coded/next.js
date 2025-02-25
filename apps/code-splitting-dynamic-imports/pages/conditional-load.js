import dynamic from 'next/dynamic';
import { useState } from 'react';

const Checkout = dynamic(() => import('../components/Checkout'));

export default function ConditionalLoad() {
    const [showCheckout, setShowCheckout] = useState(false);

    return (
        <div>
            <h1>Conditional Loading of a Component</h1>
            <button onClick={() => setShowCheckout(true)}>Show Checkout</button>
            {showCheckout && <Checkout />}
        </div>
    );
}