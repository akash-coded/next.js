// ===============================
// ✨ abTesting.js
// ===============================
import { NextResponse } from 'next/server';

export function abTesting(req) {
    const random = Math.random();

    if (random < 0.5) {
        req.nextUrl.pathname = '/new-dashboard';
        return NextResponse.rewrite(req.nextUrl);
    }

    return null;
}
