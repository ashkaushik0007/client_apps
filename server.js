// Get dependencies
var express = require('express'), 
http = require('http'),
path = require('path'),
bodyParser = require('body-parser'),
expressJwt = require('express-jwt'),
cors = require('cors');

// Get our API routes
const api = require('./server/routes/api');
const user = require('./server/routes/user/user');
const company = require('./server/routes/company/company');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);
app.use('/api/user', user);
app.use('/api/company', company);

// Catch all other routes and return the index file
app.get('/*', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));