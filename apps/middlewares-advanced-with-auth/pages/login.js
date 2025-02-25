// ===============================
// 🚦 login.js
// ===============================
import React from 'react';
import { SignJWT } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET || 'default-secret-key');

// Generate a JWT token using JOSE
async function generateToken(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('1h')
        .sign(SECRET_KEY);
}

const Login = () => {
    // Function to set the auth-token cookie and redirect
    const setAuthToken = async (role, redirectUrl) => {
        const token = await generateToken({ role, name: role === 'admin' ? 'Admin User' : 'John Doe' });
        document.cookie = `auth-token=${token}; path=/; SameSite=Lax`;
        window.location.href = redirectUrl;
    };

    return (
        <div>
            <h1>Login Page - Select Your Role</h1>
            <button onClick={() => setAuthToken('user', '/dashboard')}>Login as User</button>
            <button onClick={() => setAuthToken('admin', '/admin')}>Login as Admin</button>
        </div>
    );
};

export default Login;