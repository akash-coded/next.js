// ===============================
// 🔧 middleware.js
// ===============================
import { NextResponse } from 'next/server';
import { checkAuthentication } from './utils/auth';
import { checkRole } from './utils/roleControl';
import { geoRedirect } from './utils/geoRedirect';
import { rateLimiter } from './utils/rateLimit';
import { abTesting } from './utils/abTesting';

// 🛠 Middleware composition function
function composeMiddlewares(...middlewares) {
    return async (req) => {
        for (const middleware of middlewares) {
            const response = await middleware(req);
            if (response) return response; // Stop if a middleware returns a response
        }
        return NextResponse.next();
    };
}

// 🧠 Apply middleware chaining
export const middleware = composeMiddlewares(
    checkAuthentication,
    checkRole,
    geoRedirect,
    rateLimiter,
    abTesting
);

// 📌 Apply middleware to specific routes
export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*', '/api/:path*'],
    // runtime: 'experimental-edge',
};
