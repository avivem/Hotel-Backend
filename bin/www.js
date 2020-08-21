const http = require('http');
const app = require('../app');

const port = process.argv.length > 2 ? process.argv[2] : 0 ||
    parseInt(process.env.PORT, 10) ||
    8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);