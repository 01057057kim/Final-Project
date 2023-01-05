const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
    if (req.url === '/index.html') {
        fs.readFile('index.html', (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    } else if (req.url === '/todo.css') {
        fs.readFile('todo.css', (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });
    } else if (req.url === '/alarm.css') {
        fs.readFile('alarm.css', (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });
    } else if (req.url === '/todo.js') {
        fs.readFile('todo.js', (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/javascript');
            res.end(data);
        });
    } else if (req.url === '/alarm.js') {
        fs.readFile('alarm.js', (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/javascript');
            res.end(data);
        });
    } else if (req.url === '/plus.svg') {
        fs.readFile('plus.svg', (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/svg+xml');
            res.end(data);
        });
    } else if (req.url === '/download.svg') {
        fs.readFile('download.svg', (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/svg+xml');
            res.end(data);
        });
    }else if (req.url === '/FINAL.pptx') {
        fs.readFile('FINAL.pptx', (err, data) => {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
            res.setHeader('Content-Disposition', 'attachment; filename=01057057-01057030-Final.pptx');
            res.end(data);
        });
    }else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});