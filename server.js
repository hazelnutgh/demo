const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.port = process.env.PORT || 3000

server.listen(server.port, () => {
    console.log('server running');
});