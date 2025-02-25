// ===============================
// 🔐 auth.js (JOSE for Edge Compatibility)
// ===============================
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret-key');

export async function checkAuthentication(req) {
    const token = req.cookies.get('auth-token');

    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
        const { payload } = await jwtVerify(token.value, SECRET_KEY);
        req.user = payload;
    } catch (error) {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    return null; // Proceed if authenticated
}