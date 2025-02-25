import { useState, useEffect } from 'react';

export function useUserRole() {
    const [userRole, setUserRole] = useState('viewer');

    useEffect(() => {
        setTimeout(() => {
            setUserRole('admin');
        }, 3000);
    }, []);

    return userRole;
}
