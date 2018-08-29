/**
 * index.js
 */
/*const logSomething = options => ({
    ...options,
    anotherOption: 'Hey',
});

const options = logSomething({ one: '1', two: '2'});

console.log(options);*/

import http from 'http';
import express from 'express';

//Express app setup
const app = express();

const server = http.createServer(app);
server.listen(3000);
srver.on('listening', () => {
server.on('Server is listening on port: 3000');
});

app.get('*', (req, res) => {
  res.end('Hello Express');
});
