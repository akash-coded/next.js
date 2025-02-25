// ===============================
// ⏱️ rateLimit.js
// ===============================
const rateLimit = new Map();
const LIMIT_THRESHOLD = parseInt(process.env.RATE_LIMIT_THRESHOLD) || 10;
const TIME_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW) || 60000;

export function rateLimiter(req) {
    const clientIP = req.ip || req.headers.get('x-forwarded-for');
    const now = Date.now();

    if (!rateLimit.has(clientIP)) {
        rateLimit.set(clientIP, []);
    }

    const timestamps = rateLimit.get(clientIP);
    timestamps.push(now);

    while (timestamps.length && timestamps[0] < now - TIME_WINDOW) {
        timestamps.shift();
    }

    if (timestamps.length > LIMIT_THRESHOLD) {
        return new Response('Too many requests, please try again later.', { status: 429 });
    }

    rateLimit.set(clientIP, timestamps);
    return null;
}