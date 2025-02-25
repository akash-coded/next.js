// ===============================
// 🎯 roleControl.js
// ===============================
import { NextResponse } from 'next/server';

export function checkRole(req) {
    const user = req.user;

    if (req.nextUrl.pathname.startsWith('/admin') && user.role !== 'admin') {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    return null;
}