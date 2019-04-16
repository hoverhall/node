const http = require('http');
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/*', function(req, res) {
    if (req.url.startsWith('/public/')) {
        var filePath = req.url.substr(1);
        fs.readFile(filePath, function(err, data) {
            switch (req.url) {
                case '/':
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(html);
                default:
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('404: Not found!');
            }
        })
    } else {
        f404(res);
    }
})