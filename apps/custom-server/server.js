const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Custom route example
    server.get('/api/custom', (req, res) => {
        res.send('Custom route is working!')
    });

    // Catch-all route to handle all other requests and let Next.js handle them
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});